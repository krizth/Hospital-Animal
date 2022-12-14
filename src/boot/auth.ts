import { boot } from 'quasar/wrappers';
import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecord,
} from 'vue-router';
import * as auth from 'firebase/auth';
import { firebaseAuth } from 'boot/firebase';
import {useUserStore} from 'stores/user-store';
import type firebase from 'firebase/compat';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ router }) => {
  const userStore = useUserStore();

  router.beforeEach(
    async (
      trans: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const user = await new Promise<firebase.User>(
        (resolve) => auth.onAuthStateChanged(firebaseAuth,
          async (usr) => resolve(usr as firebase.User)));
      const routeRecord: boolean = trans.matched.some(
        (route: RouteRecord) => route.meta.requiresAuth
      );
      if (routeRecord && !user) {
        await router.push({ name: 'Index' });
      } else {
        userStore.setUser(user);
        next();
      }
    }
  );
});
