import { defineStore } from 'pinia';

export const useCounterStore = defineStore('user', {
  state: () => ({

    user: {
      uid: 'fistUserUID-----------------------------',
      name: 'Primer Usuario',
      age: 30,
      avatar: 'https://ui-avatars.com/api/?name=Primer+Usuario',
      mail: 'mail@example.com',
    },
  }),
  getters: {},
  actions: {},
});
