import { defineStore } from 'pinia';

export const useCounterStore = defineStore('authentification', {
  state: () => ({
    access_token: 'token----------------',
    token_type: 'Bearer',
    expires_in: 95000000
  }),

  getters: {
    token: (state) => `${state.keystore.token_type} ${state.keystore.access_token}`
  },

  actions: {
  },
});
