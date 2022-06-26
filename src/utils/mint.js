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

    // Mint NFT on Polygon
    const transactionHash = await mintNFTWithUri(false, {
        to: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
        url: 'ipfs://bafybeidi7xixphrxar6humruz4mn6ul7nzmres7j4triakpfabiezll4ti/metadata.json',
        tokenId: '100000',
        chain: Currency.MATIC,
        contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
        fromPrivateKey: '0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2'
    });

    // Upload to Opensea
}