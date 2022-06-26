<script lang="ts">
import ArtistModalVue from "./ArtistModal.vue";

export default {
    data() {
        return {
            showModal: false,
        }
    },
    components: {ArtistModalVue},
    props: {
        artistInfo: Object,
        // artist: String,
        // oneliner: String,
        // description: String,
        // artistImageUrl: String,
        // artistPortfolioImages: String,
        // artistPortfolioSite: String,
        // artistTwitterSite: String,
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        selectedArtist() {
            this.showModal = false;
            this.$store.state.voted = this.artistInfo;
        }
    },
};
</script>
<template>
    <div 
        @click="openModal"
        :class=" this.$store.state.voted?.address == this.artistInfo.address ? 'border-[#4b6b9c] border-10' :'' "
        class="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#15263F] dark:border-gray-700 dark:hover:border-transparent">
        <div class="flex flex-col sm:-mx-4 sm:flex-row">
            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" :src="artistInfo.artistImageUrl" alt="">

            <div class="mt-4 sm:mx-4 sm:mt-0">
                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{{artistInfo.name}}</h1>
                
                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{{artistInfo.oneliner}}</p>
            </div>
        </div>

        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{{artistInfo.description}}</p>
        
        <div class="flex mt-4 -mx-2">
            <a :href="artistInfo.artistPortfolioSite" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Portfolio">
                <font-awesome-icon icon="fa-solid fa-globe" />
            </a>

            <a :href="artistInfo.artistTwitterSite" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Twitter">
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
        </div>
        <Modal v-model="showModal" :close="closeModal">
            <div class="modal">
            <ArtistModalVue @closedModal="closeModal" @selectedArtist="selectedArtist" :artistPortfolioImages="artistInfo.artistPortfolioImages"/>
            <!-- <button @click="closeModal">close</button> -->
            </div>
        </Modal>
    </div>
</template>