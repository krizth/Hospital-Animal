import { defineStore } from 'pinia';
import { User } from 'components/models';
import firebase from 'firebase/compat';
import UserInfo = firebase.UserInfo;

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
    setUser (user:UserInfo) {
      this.uid=user?.uid;
      this.email=user?.email || ''
      this.name=user?.displayName || ''
      this.avatar=user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName?.replace(' ','+')}`
    }
  },
});
