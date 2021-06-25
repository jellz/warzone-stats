with (import <nixpkgs> { });

mkYarnPackage {
  name = "warzone-stats";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
  patchPhase = "node_modules/.bin/prisma generate";
  buildPhase = "yarn build:nix";
}
