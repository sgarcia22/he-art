<script lang="ts">
import WalletConnect from '@/components/WalletConnect.vue'

export default {
    components: {
        WalletConnect
    }
}
</script>
<template>
 <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-left p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <WalletConnect/>
        </div>
    </nav>
</template>