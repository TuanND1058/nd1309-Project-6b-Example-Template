const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "b8e77f70fe4d4ef5960285c0864618c5";

const fs = require('fs');
const mnemonic = fs.readFileSync("../.secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: () => new HDWallet(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
      network_id: 11155111,
      gas: 4500000,
      gasPrice: 10000000000,
      networkCheckTimeout: 100000, // Increase the timeout to 100 seconds
      timeoutBlocks: 200, // Increase the number of blocks to wait before timing out
    },
  },
};