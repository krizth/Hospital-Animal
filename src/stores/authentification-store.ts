import { defineStore } from 'pinia';
import {
  GoogleAuthProvider,
  UserCredential,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  //createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import type {EmailAndPasswordCredentials, Token, User} from 'components/models';
import {Loading, Notify} from 'quasar';
import {useUserStore} from 'stores/user-store';
import type firebase from 'firebase/compat';
import type {NavigationFailure, RouteLocationRaw} from 'vue-router';
export const useAuthStore = defineStore('authentication', {

  state: ():Token => ({
    access_token: undefined,
    token_type: undefined,
    expires_in: undefined,
    id_token:undefined,
    provider_id:undefined,
    sign_in_method:undefined,
  } ),

  getters: {
    token: (state) => `${state.token_type} ${state.access_token}`,

  },

  actions: {
    setAuthState(state:firebase.auth.OAuthCredential):Token{

      this.access_token = state.accessToken;
      this.token_type = 'Bearer';
      this.expires_in = undefined;
      this.id_token = state.idToken;
      this.provider_id = state.providerId;
      this.sign_in_method = state.signInMethod;
      return this.$state;
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      await signInWithRedirect(auth, provider);
    },
   /* async createUserWithEmailAndPassword(credentials:EmailAndPasswordCredentials){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth,credentials.email,credentials.password)
        .then((userCredential) => {
        console.log(userCredential)
      })
    },*/
    async loginWithEmailAndPassword(credentials:EmailAndPasswordCredentials,routerPush:(to:RouteLocationRaw)=>Promise<NavigationFailure | void | undefined>){
      const auth = getAuth();
      const userStore = useUserStore()
      Loading.show()
      signInWithEmailAndPassword(auth, credentials.email,credentials.password)
        .then((userCredentials) => {
         const credentials= userCredentials.user
          const User : User = {
           name:credentials.displayName,
            uid:credentials.uid,
            email:credentials.email,
            age:undefined,
            avatar:credentials.photoURL|| `https://ui-avatars.com/api/?name=${credentials.displayName}`
         } as User;
          userStore.$state=User
          Loading.show()
          Notify.create({
            message: 'Login Correcto, Redirigiendo...',
            type: 'success'
          })
          setTimeout(() =>routerPush({name:'Home'}),1000)
        }).catch((e)=>Notify.create({message:e.message, type:'error',}))
        .finally(()=>Loading.hide())
    },
    async redirectResponse(routerPush:(to:RouteLocationRaw)=>Promise<NavigationFailure | void | undefined>){
      const auth = getAuth();
       const userStore = useUserStore()
            getRedirectResult(auth)
        .then(async (result: UserCredential | null) => {
          if (result?.user) {
            const credentials: firebase.auth.OAuthCredential|unknown  =
              await GoogleAuthProvider.credentialFromResult(result) as Token|unknown;
            const User : User = {
              name:result.user?.displayName,
              uid:result.user?.uid,
              email:result.user?.email,
              age:undefined,
              avatar:result.user?.photoURL|| `https://ui-avatars.com/api/?name=${result.user?.displayName}`
            } as User
            Loading.show()
           userStore.$state=User
            this.setAuthState(credentials as firebase.auth.OAuthCredential)
            if(!!this.access_token) {
              Notify.create({
                message: 'Login Correcto, Redirigiendo...',
                type: 'success'
              })
            setTimeout(() => {routerPush({name: 'Home'}).then(()=>Loading.hide())} ,2000)
            }else{
              Loading.hide()
            }
          }
        })
        .catch((error) => {
          Notify.create({
            message: error.message,
            type: 'error',
          });
        })
    }
  },
});
