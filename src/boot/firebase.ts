import { boot } from 'quasar/wrappers';
import { getApps, getApp, initializeApp } from 'firebase/app';
import * as auth from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
let firebaseAuth: auth.Auth;
export default boot(async (/* { app, router, ... } */) => {
  const firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  firebaseAuth = auth.getAuth(firebaseApp);
  getAnalytics(firebaseApp);
});
export { firebaseAuth };
