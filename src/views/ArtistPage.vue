<script setup>
import ArtistContainer from '@/components/Artist/ArtistContainer.vue';
import Header from '@/components/Header.vue';
import { getSLAKETimestamp } from '@/utils/timestamp.js';
</script>
<script>
export default {
    mounted() {
        setInterval(this.generateColor, 5000);
    },
    computed : {
        dynamicStyle() {
            return {
                // in the case of redComp, greenComp and blueComp are a vue prop or data
                color : `rgb(${this.colorR}, ${this.colorG}, ${this.colorB});`,
            };
        },
    },
    methods: {
        componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        },
        rgbToHex(r, g, b) {
            return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
        },
        async generateColor() {
            this.index = ++this.index % 3;
            const pixelColor = await getSLAKETimestamp() % 255;
            switch (this.index % 3) {
                case 0:
                    this.colorR = pixelColor;
                    break;
                case 1:
                    this.colorB = pixelColor;
                    break;
                case 2:
                    this.colorG = pixelColor;
                    break;
                default:
                    break;
            }
            console.log(this.colorR);
            console.log(this.colorG);
            console.log(this.colorB);
            this.hex = this.rgbToHex(this.colorR, this.colorG, this.colorB);
            console.log(this.hex);
        }       
    },
    data() {
        return {
            index: 0,
            colorR: '255',
            colorB: '255',
            colorG: '255',
            hex: '',
            artists: [
                {
                    name: 'Julie',
                    oneliner: 'Abstract Artist',
                    description: 'Julie’s Mission: Mental Health.',
                    artistImageUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cf2200d8-cc9e-4cb6-a262-891941053244/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064528Z&X-Amz-Expires=86400&X-Amz-Signature=a5c6722b9a95cc953f762acbfabb6b2a8c9343e6f51676ef80a7261e37751295&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject',
                    artistPortfolioImages: [
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/23d3fdc9-6ac1-46ad-b481-b5dee98a230a/images.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064638Z&X-Amz-Expires=86400&X-Amz-Signature=a86911d7b32f7ab6d7caec59bce6603897d6c055ec43457edea71a73478695c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22images.jpeg%22&x-id=GetObject',
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a35e4c35-ce49-42b1-ab5a-a4b751449b41/NFTMETAVERSE.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064652Z&X-Amz-Expires=86400&X-Amz-Signature=10ab4894b5e5d17e29ee94113ad2cb239359b938366567de0e93295c8e63cd70&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22NFTMETAVERSE.jpeg%22&x-id=GetObject',
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/58f40c9f-af04-48dd-a9dd-d7b72f84efff/nft_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064708Z&X-Amz-Expires=86400&X-Amz-Signature=74fdc6bd737ea41577fb76b02a95e3d189627c5d23f05a9828aeb5e18e721541&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22nft%25201.png%22&x-id=GetObject',
                    ],
                    artistPortfolioSite: '',
                    artistTwitterSite: '',
                    address: '2',
                },
                {
                    name: 'Eric',
                    oneliner: 'Naturalistic Art',
                    description: 'Regenrative Finance and SMART Cities',
                    artistImageUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8d8459ae-658a-4a65-a78e-a2d2e0e0dc65/istockphoto-1165314750-612x612.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064858Z&X-Amz-Expires=86400&X-Amz-Signature=e8c2886c5c217c69adedb597c24ecf487ff5d5460d6f51d5cc853cc72abab910&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22istockphoto-1165314750-612x612.jpeg%22&x-id=GetObject',
                    artistPortfolioImages: [
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b3923375-652c-4488-bf40-7f9d20381663/OceanImageBank_MattCurnock_107.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064840Z&X-Amz-Expires=86400&X-Amz-Signature=d33fda06525f924ef7c0e93e6925c59cb1578bc0b6dc5188b235a39b8063d7c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22OceanImageBank_MattCurnock_107.jpeg%22&x-id=GetObject',
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4ebfb0f3-c5d8-4a11-a552-af956630d223/unsplash-image-IwH7MrcsNEU.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064848Z&X-Amz-Expires=86400&X-Amz-Signature=6e5f444fc8e0ed3da37f2ee11f403593cdead669b36ee9360ac4ae8f58e59bfd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22unsplash-image-IwH7MrcsNEU.jpeg%22&x-id=GetObject',
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/86f7732d-ba50-42f7-80b8-b20a391f1f5a/Untitled.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T064853Z&X-Amz-Expires=86400&X-Amz-Signature=c149bf1c10bc8fd4a9a93ab1c4262ab5dfe1f4b6ddeb4ab5c2f1e50fd2ce5365&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.gif%22&x-id=GetObject',
                    ],
                    artistPortfolioSite: '',
                    artistTwitterSite: '',
                    address: '3',
                },
                {
                    name: 'Yoriko',
                    oneliner: 'Women Empowerment Artist',
                    description: 'Women epowerement and adovacy, Speaking up for uderserved socirty’s',
                    artistImageUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4765dfd-87cf-4cf0-963c-c8e816a2863c/pexels-photo-3992656.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065041Z&X-Amz-Expires=86400&X-Amz-Signature=b55c638f0438d7896ae1936b415d4254d50fc582243bbb88c56973c1d5349864&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pexels-photo-3992656.jpeg%22&x-id=GetObject',
                    artistPortfolioImages: [
                       'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4ae39975-ffa5-42f5-9e9c-0de3d15dde4e/nf--820x500.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065046Z&X-Amz-Expires=86400&X-Amz-Signature=07d9b580433ff5af6b1a00fff4721b52ea05ef9e4627e0e92bb71a5ec226f309&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22nf--820x500.jpeg%22&x-id=GetObject',
                       'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/133d6751-f395-464a-a8f8-6f2ecab7c7b5/1_mC80vHikgXBcjbbMR2OChA.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065050Z&X-Amz-Expires=86400&X-Amz-Signature=d3a50eed27ea612b67f2228562741b7c620aa119e737c3b72a29179ffebbf8a8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%221_mC80vHikgXBcjbbMR2OChA.jpeg%22&x-id=GetObject',
                       'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c423ced6-e133-4933-8956-e93f9fcf19dd/MOBILE-50.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065054Z&X-Amz-Expires=86400&X-Amz-Signature=6ccadea4d8f9c2f9e5f068fbb71d06b54bf2b0e6bb1e8ed75678af0f03262e37&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MOBILE-50.webp%22&x-id=GetObject',
                    ],
                    artistPortfolioSite: '',
                    artistTwitterSite: '',
                    address: '4',
                },
                {
                    name: 'Leonard',
                    oneliner: 'Generative Art and Machine Learning',
                    description: 'Areas of focus include environmental activism and content. His mission is environmental advocay and cleaning oceans.',
                    artistImageUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc2e78b-d5f7-4e78-9278-2cd8f37ff362/123451661-portrait-of-man-wearing-grey-tshirt-as-casual-concept-closeup-isolated-on-white-background.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065149Z&X-Amz-Expires=86400&X-Amz-Signature=d26b4503c2eabf0ce6500c031b1172bded5c915a0099aec7fcfea35fc4d0fe57&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22123451661-portrait-of-man-wearing-grey-tshirt-as-casual-concept-closeup-isolated-on-white-background.webp%22&x-id=GetObject',
                    artistPortfolioImages: [
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2256610e-614c-440c-b322-b3c57143fc3d/b372dd35e283b2b6263f82b1d22f12c0.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065156Z&X-Amz-Expires=86400&X-Amz-Signature=919f5bc4b5a83999bc9a3859efa08c69a7f8efb73ed4e85e6d19669782f9a952&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22b372dd35e283b2b6263f82b1d22f12c0.jpeg%22&x-id=GetObject',
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/09c1fb20-a286-48f8-b7b9-42d85b849941/unnamed.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065200Z&X-Amz-Expires=86400&X-Amz-Signature=e90563965bdf682c8a25ac69e8a99c9b3372bb8a1059db7ca3a9a8ce22ce7eaa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22unnamed.png%22&x-id=GetObject',
                        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1ece50b6-e01f-4513-8dde-b8ef2c2137a7/unnamed_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220626T065203Z&X-Amz-Expires=86400&X-Amz-Signature=9eb797eac8b54eba4fd9a464ef7dd285bf1987c558f0496816ce8bd9ce4fd978&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22unnamed%2520%281%29.png%22&x-id=GetObject',
                    ],
                    artistPortfolioSite: '',
                    artistTwitterSite: '',
                    address: '5',
                },
            ],
        }
    },
};
</script>

<template>
  <div>
    <Header/>
        <h1 :class="text-[this.hex]" class="mt-6 text-3xl font-semibold text-center capitalize lg:text-4xl dark:text-white">HE(ART)</h1>
                
        <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            A unique collaboration between a group of diverse and extremely talented artists. All proceeds will go towards a voted fund.
        </p>
    <ArtistContainer :artistsList="artists"/>
  </div>
</template>
