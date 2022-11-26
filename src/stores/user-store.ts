import { defineStore } from 'pinia';
import type { User } from 'components/models';
import type firebase from 'firebase/compat';



export const useUserStore = defineStore('user', {
  state: () :User => ({

    uid: 'fistUserUID-----------------------------',
    name: 'Primer Usuario',
    age: 30,
    avatar: 'https://ui-avatars.com/api/?name=Primer+Usuario',
    email: 'mail@example.com',

  }),
  getters: {},
  actions: {
    setUser (user:firebase.UserInfo) {
      this.uid=user?.uid;
      this.email=user?.email || ''
      this.name=user?.displayName || ''
      this.avatar=user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName?.replace(' ','+')}`
    }
  },
});
