export async function getNFTMetadata() {
    const contractAddress = '0x2953399124f0cbb46d2cbacd8a89cf0599974963';
    const imageResp = await fetch(
        `https://api-eu1.tatum.io/v3/ipfs`,
        {
          method: 'GET',
          headers: {
            'x-api-key': import.meta.env.VITE_TATUM_API_KEY
          },
          body: {
            chain_id: 80001,
            contract_address: contractAddress,
            token_id: 1,
          }
        }
      );
      
      const imageData = await imageResp.text();
      console.log(imageData);
}