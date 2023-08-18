# VonSim site

If you are looking for the source code of VonSim, please visit [vonsim/vonsim](https://github.com/vonsim/vonsim).

This repository contains the minimal code to deploy VonSim on GitHub Pages.

## How it works

The VonSim repository is added as a submodule in the `vonsim` folder. When the site is built, the VonSim repository is cloned automatically.

When the VonSim repository is updated, it has a [GitHub Action](https://github.com/vonsim/vonsim/blob/main/.github/workflows/trigger-deploy.yml) that emits a [repository dispatch event](https://docs.github.com/en/free-pro-team@latest/rest/repos/repos#create-a-repository-dispatch-event) with the name `deploy`, which triggers a [GitHub Action](./.github/workflows/deploy.yml) in this repository.

It's a bit convoluted, but it works.
