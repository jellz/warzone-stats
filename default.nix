with (import <nixpkgs> { });

mkYarnPackage {
  name = "warzone-stats";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
	workspaceDependencies = ["prisma"];
  patchPhase = "${pkgs.tree}/bin/tree 2>&1; prisma generate";
  buildPhase = "yarn build:nix";
}
