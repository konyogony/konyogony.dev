{
  lib,
  rustPlatform,
}:
rustPlatform.buildRustPackage {
  pname = "hyprkony";
  version = "unstable-2026-05-10";

  src = lib.cleanSource ./.;

  cargoLock = {
    lockFile = ./Cargo.lock;
  };

  meta = {
    mainProgram = "backend";
  };
}
