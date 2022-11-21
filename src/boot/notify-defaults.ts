import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  Notify.registerType('error', {
    color: 'negative',
    icon: 'ion-warning',
  });
  Notify.registerType('success', {
    color: 'primary',
    icon: 'ion-checkmark',
    textColor: 'black',
  });
  Notify.setDefaults({
    position: 'bottom',
    timeout: 2500,
    textColor: '#d2dff8',
    progress: true,
    actions: [{ icon: 'ion-close', color: 'primary' }],
  });
});
