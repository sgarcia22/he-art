<script>
export default {
    // data: {
    //     streamer: {},
    // },
    // setup() {
    //     this.streamer = this.$store.state.voted;
    // }
}
</script>
<template>
 <div class="flex w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" :src="this.$store.state.voted?.artistImageUrl" alt="">

        <!-- <div class="w-1/3 bg-cover" style="background-image: url(this.$store.state.voted?.artistImageUrl)"></div> -->

        <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{{this.$store.state.voted?.name}}</h1>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{this.$store.state.voted?.description}}</p>

            <div class="flex justify-between mt-3 item-center">
                <div class="flex mt-4 -mx-2">
                    <a :href="this.$store.state.voted?.artistPortfolioSite" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Portfolio">
                        <font-awesome-icon icon="fa-solid fa-globe" />
                    </a>

                    <a :href="this.$store.state.voted?.artistTwitterSite" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Twitter">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>