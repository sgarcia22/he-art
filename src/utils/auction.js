import {abi, address} from "./auction_abi.js";
const { ethers } = require('ethers')

const provider = this.$store.state.web3Provider;

const contract = new ethers.Contract(
    address,
    abi,
    provider
  );

// var sendPromise = contract.setValue('Hello World');

// sendPromise.then(function(transaction){
//   console.log(transaction);
// });