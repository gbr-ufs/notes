# This flake is purposefully "impure" so I don't have to depend on flake-utils.
# Its "impurity" comes from the use of builtins.currentSystem.

{
  description = "Markdown university notes, rendered with mdbook.";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs, ... }:
    let
      system = builtins.currentSystem; # "Impurity" here.
      pkgs = nixpkgs.legacyPackages.${system};

    in {
      devShell.${system} = pkgs.mkShell {
        packages = with pkgs; [
          git
          mdbook
        ];
      };
    };
}
