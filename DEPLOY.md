# Deploying Axis to a new chain

## Order of ceremony

The following actions need to be carried out in order to add a new chain to Axis:

1. Deploy the smart contracts to the new chain
2. [Add the new chain config](https://github.com/Axis-Fi/subgraph/?tab=readme-ov-file#adding-a-new-chain) to the subgraph repo
3. [Deploy](https://github.com/Axis-Fi/subgraph/?tab=readme-ov-file#deploy-guide) the subgraph
4. Obtain an RPC URL for the new chain from your RPC provider (e.g. Alchemy)
5. Add the new chain and deployment configuration to the [deployments](https://github.com/Axis-Fi/ui-libs/blob/main/packages/deployments/README.md#adding-a-new-chain-deployment) package
6. Add a cloak watcher to the [cloak](https://github.com/Axis-Fi/cloak) package
7. Confirm the new [deployments](https://github.com/Axis-Fi/ui-libs/blob/main/packages/deployments/README.md#adding-a-new-chain-deployment) package has been published to NPM
8. Consume the new [deployments package version](https://github.com/Axis-Fi/ui-libs/blob/main/packages/deployments/package.json) inside [launchpad](./apps/dapp/package.json) and [standalone](https://github.com/Axis-Fi/standalone-ui/blob/main/apps/dapp/package.json)
9. Test the `launchpad` and `standalone` dapp using the new chain: `pnpm dev`

# Deploy the smart contracts

Each chain requires the Axis smart contracts to be deployed. This is handled from the respective contract repos:

- [axis-core](https://github.com/Axis-Fi/axis-core)
- [axis-periphery](https://github.com/Axis-Fi/axis-periphery/)
- [axis-registry](https://github.com/Axis-Fi/axis-registry)

# Add the new chain to the subgraph

The subgraph needs to be updated to include the new chain. This is achieved by updating the `networks.json` file in the [subgraph](https://github.com/Axis-Fi/subgraph) package.

See the subgraph [README](https://github.com/Axis-Fi/subgraph/?tab=readme-ov-file#adding-a-new-chain) for more information.

# Deploy the subgraph

Once the the new chain config has been added to the subgraph repo, the new subgraph can be deployed. This is done by following the subgraph [README](https://github.com/Axis-Fi/subgraph/?tab=readme-ov-file#deploy-guide).

# Obtain an RPC URL for the new chain

This is a manual process. The RPC URL for the new chain needs to be obtained from your RPC provider (Alchemy, Infura, etc.). Axis currently uses Alchemy.

# Add the new chain to the deployments package

The [deployments package](https://github.com/Axis-Fi/deployments) needs to be updated to include the new chain.

See the deployments [README](https://github.com/Axis-Fi/deployments/?tab=readme-ov-file#adding-a-new-chain) for how to do this.

# Add a cloak watcher to the cloak package

The cloak package needs to be updated to include the new chain. This is achieved by updating the `cloak.json` file in the [cloak](https://github.com/Axis-Fi/cloak) package.

See the cloak [README](https://github.com/Axis-Fi/cloak/?tab=readme-ov-file#adding-a-new-chain) for more information.

# Publish the new deployments package to NPM

The new deployments package needs to be published to NPM.
