{
  lib,
  rustPlatform,
}:
rustPlatform.buildRustPackage {
  pname = "hyprkony";
  version = "unstable-2026-04-02";

  src = lib.cleanSource ./.;

  cargoLock = {
    lockFile = ./Cargo.lock;
  };

  meta = {
    mainProgram = "backend";
  };
}
