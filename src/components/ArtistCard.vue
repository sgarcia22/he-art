<script lang="ts">
export default {
//   name: 'ArtistCard',
  props: {
    artists: [Object],
    // artist: String,
    // oneliner: String,
    // description: String,
    // artistImageUrl: String,
    // artistPortfolioImages: String,
    // artistPortfolioSite: String,
    // artistTwitterSite: String,
  },
};
</script>
<template>
   <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
            <!-- <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our <span class="text-blue-500">Executive Team</span></h1>
            
            <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p> -->
            
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                <div v-for="artist in artists" class="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div class="flex flex-col sm:-mx-4 sm:flex-row">
                        <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">

                        <div class="mt-4 sm:mx-4 sm:mt-0">
                            <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{{artist.name}}</h1>
                            
                            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{{artist.oneliner}}</p>
                        </div>
                    </div>

                    <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{{artist.description}}</p>
                    
                    <div class="flex mt-4 -mx-2">
                        <a :href="artist.artistPortfolioSite" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Portfolio">
                            <font-awesome-icon icon="fa-solid fa-globe" />
                        </a>

                        <a :href="artistTwitterSite" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            aria-label="Twitter">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                            <!-- <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg> -->
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>