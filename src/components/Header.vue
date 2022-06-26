<script lang="ts">
import WalletConnect from '@/components/WalletConnect.vue'
export default {
    components: {
        WalletConnect
    },
    methods: {
        switchPage() {
            this.$store.state.pageIndex++;
            console.log(this.$store.state.page[this.$store.state.pageIndex]);
            this.$router.push(this.$store.state.page[this.$store.state.pageIndex]);
        },
    },
}
</script>
<template>
 <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <WalletConnect/>
            <h1 class="pr-20 mr-20 mt-6 text-1xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">{{this.$store.state.timer}}</h1>
            <div @click="switchPage">
                <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
            </div>
        </div>
    </nav>
</template>