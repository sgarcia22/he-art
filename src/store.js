import { createStore } from 'vuex';

export const store = createStore({
    state () {
      return {
        web3Provider: null,
        voted: null,
      }
    },
    mutations: {
      changeWeb3ProviderValue (state, newValue) {
        state.web3Provider = newValue;
      },
    }
});