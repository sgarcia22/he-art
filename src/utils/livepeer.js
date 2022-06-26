const axios = require('axios');
const fs = require('fs');

export async function uploadLivepeerVideo() {
    var url = "https://www.youtube.com/watch?v=8CaZVVFYl2o";

    const response = await axios.post("https://livepeer.studio/api/asset/import", {
        headers: {
        'Authorization': `Bearer ${process.env.LP_API_KEY}`,
        'Content-Type': 'application/json'
        },
        data: JSON.stringify({
        "url": "$EXTERNAL_URL",
        "name": "Example name"
    })
    });

    console.log(JSON.stringify(response.data))

    const response2 = await axios.post(
      "https://livepeer.studio/api/asset/$ASSET_ID/export",
      {
        headers: {
          Authorization: `Bearer ${process.env.LP_API_KEY}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          ipfs: {},
        }),
      }
    );
    console.log(JSON.stringify(response2.data));
}