<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar} from 'quasar';

export default defineComponent({
  name: 'App',
  setup: function () {
    const q = useQuasar()
    const myIcons = {
      'waling-with-pet': 'img:src/assets/walking.png',
    }
    q.iconMapFn = (iconName:string) => {
      const icon = myIcons[iconName as keyof typeof myIcons] ;
      if (icon !== void 0) {
        return {icon: icon}
      }
    }
  }
});
</script>
