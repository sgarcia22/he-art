import { ethers } from "ethers";
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import { store } from "../store";

const TESTNET = "testnet";
const MAINNET = "mainnet"; // WalletConnect doesn't work with testnet

const INFURA_ID = "27e484dcd9e3efcfd25a83a78777cdf1";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: INFURA_ID,
        },
    }
};

const web3Modal = new Web3Modal({
    // network: MAINNET,
    cacheProvider: false,
    providerOptions
});


// web3modal with WalletConnect
export async function connectWallet() {
    const web3ModalRawProvider = await web3Modal.connect();
    const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalRawProvider, "any");

    store.commit('changeWeb3ProviderValue', web3ModalProvider);
    return web3ModalProvider;
}