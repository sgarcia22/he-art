<script lang="ts">
import { connectWallet } from "../utils/web3wallet";

export default {
    data() {
      return {
        menu: false,
        address: '',
      };
    },
    methods: {
        async connectWalletInit() {
            // TODO - check on mounted if already connected
            const provider = await connectWallet();
            this.address = await provider.getSigner().getAddress();
      },
    },
};
</script>
<template>
    <div v-if="this.$store.state.web3Provider == null">
            <button
                type="button"
                @click="connectWalletInit()"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 p-2 ml-3"
              >
                Connect your wallet
            </button>
          
      </div>
      <div v-else>
          <div class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-gray-800 ">
          Welcome
        </div>
    </div>    
</template>