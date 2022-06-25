<script setup>
import ArtistCard from '@/components/ArtistCard.vue'
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
                    artistPortfolioImages: [''],
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
    <ArtistCard :artists="artists"/>
  </div>
</template>
