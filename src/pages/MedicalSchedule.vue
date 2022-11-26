<template>
  <q-page padding>
    <desktop v-if="isDesktop"/>

  </q-page>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';

import Desktop from 'components/MedicalSchedule/desktop/index.vue';
import {useQuasar} from 'quasar';


export default defineComponent({
  name: 'MedicalSchedule',
  components: {Desktop},
  setup(){
    const q=useQuasar()
    const isDesktop = computed(()=>q.platform.is.desktop)
    return {isDesktop}

  }
});
</script>
