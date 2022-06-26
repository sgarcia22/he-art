import { createStore } from 'vuex';

export const store = createStore({
    state () {
      return {
        timer: '',
        web3Provider: null,
        voted: null,
        pageIndex: 0,
        page: [
          '/artist',
          '/live',
          '/auction',
        ],
      }
    },
    mutations: {
      changeWeb3ProviderValue (state, newValue) {
        state.web3Provider = newValue;
      },
    }
});