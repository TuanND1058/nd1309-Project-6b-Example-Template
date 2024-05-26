const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "62f170c81c504b21965a46a355e69347";

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
      gasPrice: 10000000000
    },
  }
};