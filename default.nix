with (import <nixpkgs> { });

mkYarnPackage {
  name = "warzone-stats";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
  patchPhase = "npx prisma generate";
  buildPhase = "${pkgs.tree}/bin/tree -a 2>&1; yarn build:nix";
}
