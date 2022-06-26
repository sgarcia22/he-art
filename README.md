# HE(ART) 🌻

![Main Page](https://storage.googleapis.com/ethglobal-api-production/projects/cs85k/images/Screen%20Shot%202022-06-26%20at%203.52.21%20AM.png)
![Open Modal](https://storage.googleapis.com/ethglobal-api-production/projects/cs85k/images/Screen%20Shot%202022-06-26%20at%203.52.37%20AM.png)
![Live Stream](https://storage.googleapis.com/ethglobal-api-production/projects/cs85k/images/Screen%20Shot%202022-06-26%20at%203.58.37%20AM.png)
![Mint](https://storage.googleapis.com/ethglobal-api-production/projects/cs85k/images/Screen%20Shot%202022-06-26%20at%203.58.54%20AM.png)
![Auction](https://storage.googleapis.com/ethglobal-api-production/projects/cs85k/images/Screen%20Shot%202022-06-26%20at%203.58.45%20AM.png)


[Deployed Site](https://sparkling-daffodil-b5bb66.netlify.app/)
[ETHGlobal Hackathon Submission](https://ethglobal.com/showcase/he-art-cs85k)

HE(ART) is a gamified DAO governed collective to enable artists and users to take part in the creation and funding of public social good projects.

## Project Description
The creator economy is a $105 billion/year industry. HE(ART) aims to empower and inspire creativity and positive social impact using auctionable art and NFTs. We have created a platform where people can vote on which artists are to come together, collaborate to create art and livestream their process to increase user engagement and participation, and later mint the final piece as an NFT that is auctioned off for a good cause. Many social activists get censored or don’t reach the right audiences related to their causes. Additionally, several start off alone and take time to build a community base especially in times like this, where there’s a pressing cause, too much risk associated. HE(ART) is a way to bring artists together to bring more visibility to raise funds for social good, giving activist a voice and making this collaboration interactive, impactful, and meaningful. Art therapy and expression also act as forms or expression, freedom, culture, and society. This platform would be backed by a DAO to make it easier for the community to feel in power and be properly rewarded.

## How it's Made
He(ART) is mainly a front-end application built using Vue.js 3, Vite, Tailwind CSS, and deployed on Netlify. We utilize LivePeer to upload a video of the artist performing their work and display it on the live streaming page. Once the artists are done with their work, the Tatum API is used to upload the image and metadata to IPFS, where the NFT is then minted on the Polygon Mumbai testnet and can be viewed on Opensea. An auction smart contract that is deployed on Mumbai is called once the NFT is minted. This smart contracts starts an auction and takes bids from users wanting the NFT. Once a winner is determined the NFT is transferred to their account and the accumulated funds are sent to the public good project. We use the Covalent API to pull the metadata of the NFT to display on the auction page and also make use of EPNS to send notifications of streaming updates, auction start and end, and when someone has placed a new bid.

## Technologies

### Front-End

- [Vite](https://vitejs.dev/guide/)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS v3](https://tailwindcss.com/docs/configuration)
- [Vue Router v4](https://github.com/vuejs/router)
- [Inter var font](https://github.com/rsms/inter) (self-hosted, woff2, v3.19, with 'preload' attr, check out index.html)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue) - beautiful hand-crafted SVG icons,
  by the makers of Tailwind CSS
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

### Blockchain Integration
- IPFS/FileCoin: Used to store our NFT metadata along with our video content via LivePeer.
- OpenSea: Applying for the Best Ecosystem/Community Integration, we are using NFTs to bring communities together for the social and public good.
- Tatum: Once the artists have finish their collaborated piece, they can upload the data where we then use the Tatum API to mint the NFT.
- Covalent: We use the Covalent API to pull the metadata from the minted NFT to display in the auction.
- EPNS: Used to send norifications to users regarding live streams and auction events.
- Livepeer: Used for live-streaming the artists' progress and hosting video content on our site.
- WalletConnect: We use WalletConnect to have users connect to our site. Once connected to our site they can vote on artists they want to see collaborate and bid on NFT auctions.
- Polygon: Polygon Mumbai Testnet is our chain where we deployed the auction contract, and mint the artist collaboration NFTs.
- Applying for Optimism Bounty: Our project is used for a public common good to bring artists, communities, and initiatives together in a fun and incentivized way. We would like to apply for the Most Optimistic Hack and the Most Public Goodiest Public Good Hack.

### Getting Started

```sh
npm i
npm run dev
npm run build
npm run serve
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/web2033/vite-vue3-tailwind-starter)
