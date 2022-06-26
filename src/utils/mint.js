import {Currency, mintNFTWithUri, ipfsGet, mintNFT} from '@tatumio/tatum';

export async function mintNFT (name, description, image) {
    // Upload image to IPFS
    const ipfsImageHash = await ipfsUpload(image);

    // Metadata for NFT
    const json = {
        "name": name,
        "description": description,
        "image": ipfsImageHash,
    };

    // Upload metadata to IPFS
    const ipfsMetadataHash = await ipfsUpload(json);

    const contractAddress = "0xA6CE7eB08A19Ed0331410b45866E7F71D9BB1f0b";

    // Mint NFT on Polygon
    const transactionHash = await mintNFTWithUri(false, {
        to: contractAddress,
        url: ipfsMetadataHash,
        tokenId: '100000',
        chain: Currency.MATIC,
        contractAddress: contractAddress,
        fromPrivateKey: process.env.VITE_MUMBAI_API_KEY
    });
}