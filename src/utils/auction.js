import {abi, address} from "./auction_abi.js";
import { store } from "../store.js";
const { ethers } = require('ethers');
import {sendNotification} from './epns';

const provider = this.$store.state.web3Provider;

const contract = new ethers.Contract(
    address,
    abi,
    provider
  );

export async function createAuction() {
    var sendPromise = contract.createDefaultNftAuction(
        '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
        1,
        '0x0000000000000000000000000000000000001010',
        5,
        100000000,
        '',
        '');

    sendPromise.then(function(transaction){
    console.log("Created Auction" + transaction);
    });
    sendNotification(store.state.web3Provider.getSigner().getAddress(), "Auction started", "The Auction for the cause has started", "The auction has started", "Auction started");
}

export async function addBid(amount) {
    var sendPromise = contract.makeBid(
        await store.state.web3Provider.getSigner().getAddress(),
        1,
        '0x0000000000000000000000000000000000001010',
        amount
        );

    sendPromise.then(function(transaction){
    console.log("Made bid" + transaction);
    });
    sendNotification(store.state.web3Provider.getSigner().getAddress(), "Bid added", "A new bid has been added.", "Bid added", "A new bid has been added");
}

export async function stopAuction() {
    var sendPromise = contract.settleAuction(
        await store.state.web3Provider.getSigner().getAddress(),
        1,
        );

        sendPromise.then(function(transaction){
        console.log("Auction Settled" + transaction);
    });
    sendNotification(store.state.web3Provider.getSigner().getAddress(), "Auction Ended", "The Auction for the cause has ended", "The auction has ended", "Auction ended");
}