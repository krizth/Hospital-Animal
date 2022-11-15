import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authentication', {
  state: () => ({
    access_token: 'token----------------',
    token_type: 'Bearer',
    expires_in: 950000,
  }),

  getters: {
    token: (state) =>
      `${state.token_type} ${state.access_token}`,
  },

  actions: {

  },
});
