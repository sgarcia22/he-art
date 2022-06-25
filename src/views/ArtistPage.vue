<script setup>
import ArtistContainer from '@/components/ArtistContainer.vue'
</script>
<script>
export default {
    data() {
        return {
            artists: [
                {
                    name: 'Sam Garcia',
                    oneliner: 'Doodle Artist',
                    description: 'Sam is an amazing doodle artist based in Miami.',
                    artistImageUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7sGyGQDMPcA/profile-displayphoto-shrink_200_200/0/1643908354358?e=2147483647&v=beta&t=4WHLa_-wWFPP_u_HOZS2lJjKop3fmPNZdZHbEfpqCbI',
                    artistPortfolioImages: [
                        'https://news.artnet.com/app/news-upload/2021/03/Chill-For-A-Sec-With-This-Carefree-Baby-Goat.png',
                        'https://img.jakpost.net/c/2021/04/05/2021_04_05_112032_1617600943._medium.jpg',
                        'https://www.metamastersmedia.io/wp-content/uploads/2021/11/MetaHero3237.png',
                    ],
                    artistPortfolioSite: 'https://samgarcia.xyz',
                    artistTwitterSite: 'https://twitter.com/samangarc22',
                },
                {
                    name: 'Sam Garcia',
                    oneliner: 'Doodle Artist',
                    description: 'Sam is an amazing doodle artist based in Miami.',
                    artistImageUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7sGyGQDMPcA/profile-displayphoto-shrink_200_200/0/1643908354358?e=2147483647&v=beta&t=4WHLa_-wWFPP_u_HOZS2lJjKop3fmPNZdZHbEfpqCbI',
                    artistPortfolioImages: [
                        'https://news.artnet.com/app/news-upload/2021/03/Chill-For-A-Sec-With-This-Carefree-Baby-Goat.png',
                        'https://img.jakpost.net/c/2021/04/05/2021_04_05_112032_1617600943._medium.jpg',
                        'https://www.metamastersmedia.io/wp-content/uploads/2021/11/MetaHero3237.png',
                    ],
                    artistPortfolioSite: 'https://samgarcia.xyz',
                    artistTwitterSite: 'https://twitter.com/samangarc22',
                },
                {
                    name: 'Sam Garcia',
                    oneliner: 'Doodle Artist',
                    description: 'Sam is an amazing doodle artist based in Miami.',
                    artistImageUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7sGyGQDMPcA/profile-displayphoto-shrink_200_200/0/1643908354358?e=2147483647&v=beta&t=4WHLa_-wWFPP_u_HOZS2lJjKop3fmPNZdZHbEfpqCbI',
                    artistPortfolioImages: [
                        'https://news.artnet.com/app/news-upload/2021/03/Chill-For-A-Sec-With-This-Carefree-Baby-Goat.png',
                        'https://img.jakpost.net/c/2021/04/05/2021_04_05_112032_1617600943._medium.jpg',
                        'https://www.metamastersmedia.io/wp-content/uploads/2021/11/MetaHero3237.png',
                    ],
                    artistPortfolioSite: 'https://samgarcia.xyz',
                    artistTwitterSite: 'https://twitter.com/samangarc22',
                },
                {
                    name: 'Sam Garcia',
                    oneliner: 'Doodle Artist',
                    description: 'Sam is an amazing doodle artist based in Miami.',
                    artistImageUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7sGyGQDMPcA/profile-displayphoto-shrink_200_200/0/1643908354358?e=2147483647&v=beta&t=4WHLa_-wWFPP_u_HOZS2lJjKop3fmPNZdZHbEfpqCbI',
                    artistPortfolioImages: [
                        'https://news.artnet.com/app/news-upload/2021/03/Chill-For-A-Sec-With-This-Carefree-Baby-Goat.png',
                        'https://img.jakpost.net/c/2021/04/05/2021_04_05_112032_1617600943._medium.jpg',
                        'https://www.metamastersmedia.io/wp-content/uploads/2021/11/MetaHero3237.png',
                    ],
                    artistPortfolioSite: 'https://samgarcia.xyz',
                    artistTwitterSite: 'https://twitter.com/samangarc22',
                },
                {
                    name: 'Sam Garcia',
                    oneliner: 'Doodle Artist',
                    description: 'Sam is an amazing doodle artist based in Miami.',
                    artistImageUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE7sGyGQDMPcA/profile-displayphoto-shrink_200_200/0/1643908354358?e=2147483647&v=beta&t=4WHLa_-wWFPP_u_HOZS2lJjKop3fmPNZdZHbEfpqCbI',
                    artistPortfolioImages: [
                        'https://news.artnet.com/app/news-upload/2021/03/Chill-For-A-Sec-With-This-Carefree-Baby-Goat.png',
                        'https://img.jakpost.net/c/2021/04/05/2021_04_05_112032_1617600943._medium.jpg',
                        'https://www.metamastersmedia.io/wp-content/uploads/2021/11/MetaHero3237.png',
                    ],
                    artistPortfolioSite: 'https://samgarcia.xyz',
                    artistTwitterSite: 'https://twitter.com/samangarc22',
                },
                
            ],
        }
    },
};
</script>

<template>
  <div class="bg-gray-50">
    <ArtistContainer :artistsList="artists"/>
  </div>
</template>
