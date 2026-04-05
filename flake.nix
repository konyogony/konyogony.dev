{
  description = "hypr.konyogony.dev backend";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  } @ inputs:
    {
      nixosModules.default = import ./backend/module.nix;
      overlays.default = _final: prev: {
        hyprkony = prev.callPackage ./backend/package.nix {};
      };
    }
    // (inputs.flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
        overlays = [self.overlays.default];
      };
    in {
      packages.hyprkony = pkgs.hyprkony;
    }));
}
