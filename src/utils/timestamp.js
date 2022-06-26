import { ethers } from "ethers";

export async function getSLAKETimestamp(blockNumber) {
    const RPC = "https://hackathon.skalenodes.com/v1/hoarse-well-made-theemim";
    const provider = new ethers.providers.JsonRpcProvider(RPC);
    const timestamp = (await provider.getBlock(blockNumber)).timestamp;
    return timestamp;
}