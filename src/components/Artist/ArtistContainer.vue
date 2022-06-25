<script lang="ts">
import ArtistCard from './ArtistCard.vue'

export default {
  props: {
    artistsList: [Object],
  },
  components: {ArtistCard},
};
</script>
<template>
   <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">            
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                <div v-for="artist in artistsList">
                    <ArtistCard :artistInfo="artist" />
                </div>
            </div>
        </div>
    </section>
</template>