const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "pledge artist client wood carry shift spice aisle clay science cabbage glad",
  "https://rinkeby.infura.io/v3/d4d56f61353545efa29be572eee5f6c9"
);

const web3 = new Web3(provider);
