<template>
  <q-layout view="lhr lpR lFr" class="i-layout-page-container">
    <q-header reveal class="bg-transparent text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-img src="~/assets/logo-small.png" />
          </q-avatar>

          Vet HIS
        </q-toolbar-title>
        <div class="row" style="gap: 10px">
          <ui-btn label="Registrar" />
          <ui-btn color="accent" label="Login" to="/login" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: var(--q-primary)">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UiBtn from 'components/ui/uiBtn.vue';
export default defineComponent({
  components: { UiBtn },
  // name: 'LayoutName',

  setup() {
    const leftDrawer = ref(false);
    return { leftDrawer };
  },
});
</script>
