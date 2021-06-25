with (import <nixpkgs> { });

mkYarnPackage {
  name = "warzone-stats";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
}
