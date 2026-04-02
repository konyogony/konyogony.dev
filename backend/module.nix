{
  config,
  lib,
  pkgs,
  ...
}: let
  cfg = config.services.hyprkony;

  env = lib.filterAttrs (_: v: v != null) {
    API_KEY =
      if cfg.apiKeyFile != null
      then "@API_KEY@"
      else null;
  };

  setupScript = pkgs.writeShellApplication {
    name = "hyprkony-setup";
    runtimeInputs = with pkgs; [coreutils replace-secret];
    text = ''
      install -Dm640 -o hyprkony -g hyprkony ${pkgs.writeText "hyprkony.env" (lib.generators.toKeyValue {} env)} /var/lib/hyprkony/.env

      ${lib.optionalString (cfg.apiKeyFile != null) ''
        replace-secret '@API_KEY@' ${lib.escapeShellArg cfg.apiKeyFile} /var/lib/hyprkony/.env
      ''}
    '';
  };

  cfgService = {
    User = "hyprkony";
    Group = "hyprkony";
    WorkingDirectory = cfg.package;
    StateDirectory = "hyprkony";
    EnvironmentFile = "/var/lib/hyprkony/.env";
  };
in {
  options.services.hyprkony = {
    enable = lib.mkEnableOption "hyprkony service";

    package = lib.mkOption {
      type = lib.types.package;
      default = pkgs.hyprkony;
      defaultText = "pkgs.hyprkony";
      description = "The hyprkony package to use";
    };

    port = lib.mkOption {
      type = lib.types.port;
      default = 8115;
    };

    apiKeyFile = lib.mkOption {
      type = lib.types.nullOr lib.types.path;
      default = null;
    };
  };

  config = lib.mkIf cfg.enable {
    systemd.services.hyprkony-setup = {
      description = "hyprkony setup";
      after = ["network-online.target"];
      wants = ["network-online.target"];
      wantedBy = ["multi-user.target"];
      restartTriggers = [cfg.package];

      serviceConfig = {
        Type = "oneshot";
        ExecStart = lib.getExe setupScript;
        RemainAfterExit = true;
        StateDirectory = "hyprkony";
      };
    };

    systemd.services.hyprkony = {
      description = "hyprkony";
      after = ["network-online.target" "hyprkony-setup.service"];
      wants = ["network-online.target"];
      requires = ["hyprkony-setup.service"];
      wantedBy = ["multi-user.target"];

      environment = {
        PORT = toString cfg.port;
      };

      serviceConfig =
        cfgService
        // {
          ExecStart = lib.getExe cfg.package;
          Restart = "on-failure";
        };
    };

    users.users.hyprkony = {
      isSystemUser = true;
      group = "hyprkony";
    };

    users.groups.hyprkony = {};
  };
}
