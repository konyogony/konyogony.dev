{
  lib,
  rustPlatform,
  pkg-config,
  openssl,
}:
rustPlatform.buildRustPackage {
  pname = "hyprkony";
  version = "unstable-2026-05-10";

  src = lib.cleanSource ./.;

  cargoLock = {
    lockFile = ./Cargo.lock;
  };

  nativeBuildInputs = [pkg-config];
  buildInputs = [openssl];

  cargoBuildFlags = ["--bin" "backend"];

  doCheck = false;

  meta = {
    mainProgram = "backend";
  };
}
