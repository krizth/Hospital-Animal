<template>
  <q-page class="row items-center justify-evenly">
    <div class="col-12 col-md-6 col-lg-4 col-2">
      <ui-card>
        <template v-slot:actions>
          <ui-btn  @click="sayHello" label="label1"/>
        </template>
      </ui-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import uiCard from 'components/ui/uiCard.vue';
import UiBtn from 'components/ui/uiBtn.vue';
import {Notify} from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  components: {UiBtn, uiCard},
  setup(){

    const sayHello = ()=>{
      Notify.create({
        message:'hello',
        type:'error'
      })
    }
    return {
      sayHello
    }
  }
});
</script>
