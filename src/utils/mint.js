export async function mintTatum (name, description, image) {
    // // Upload image to IPFS

    console.log(image.url);

    const imageForm = new FormData();
    imageForm.append("file", image);
    
    const imageResp = await fetch(
      `https://api-eu1.tatum.io/v3/ipfs`,
      {
        method: 'POST',
        headers: {
          'x-api-key': import.meta.env.VITE_TATUM_API_KEY
        },
        body: imageForm
      }
    );
    
    const imageData = await imageResp.text();
    console.log(imageData);


    // // Metadata for NFT
    const json = {
        "name": name,
        "description": description,
        "image": imageData,
    };

    // // Upload metadata to IPFS
    const metadataForm = new FormData();
    metadataForm.append("file", json);
    
    const metadataResp = await fetch(
      `https://api-eu1.tatum.io/v3/ipfs`,
      {
        method: 'POST',
        headers: {
          'x-api-key': import.meta.env.VITE_TATUM_API_KEY
        },
        body: metadataForm
      }
    );

    const metadataData = await metadataResp.text();
    console.log(metadataData);

    const contractAddress = "0xA6CE7eB08A19Ed0331410b45866E7F71D9BB1f0b";

    const resp = await fetch(
        `https://api-eu1.tatum.io/v3/nft/mint`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-testnet-type': 'polygon-mumbai',
            'x-api-key': import.meta.env.VITE_TATUM_API_KEY,
          },
          body: JSON.stringify({
            chain: 'POLYGON',
            to: contractAddress,
            url: metadataData,
            tokenId: '1',
          })
        }
      );
      
      const data = await resp.json();
      console.log(data);
}