<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated style="height: 70px" class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          class="text-default"
          flat
          round
          icon="ion-menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <q-avatar size="60px">
            <q-img
              loading="eager"
              fit="contain"
              decoding="sync"
              src="~/assets/logo-small.png"
            />
          </q-avatar>
          <span class="app-header-text">Vet-HIS</span>
        </q-toolbar-title>

        <q-btn
          class="text-default"
          dense
          flat
          round
          icon="ion-menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-primary"
      elevated
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <q-img :src="user.avatar" fit="cover" :srcset="user.avatar" />
          </q-avatar>
          <div class="text-default">{{user.name}}</div>
        </div>
      </q-img>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list class="q-pt-md">
          <LeftMenu v-for="item in linksList" v-bind="item" :key="item.title" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered> </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LeftMenu from 'components/LeftMenu.vue';
import type {User} from 'components/models';
import {useUserStore} from 'stores/user-store';

const linksList = [
  {
    title: 'Agenda Médica',
    caption: '',
    icon: 'ion-ios-calendar',
    link: '/medical-schedule',
  },
  {
    title: 'Clientes',
    caption: '',
    icon: 'ion-ios-contacts',
    link: '/clients',
  },
  {
    title: 'Pacientes',
    caption: '',
    icon: 'ion-ios-medkit',
    link: '/patient',
  },
  {
    title: 'Configuración',
    caption: '',
    icon: 'ion-ios-settings',
    link: '/settings',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    LeftMenu,
  },

  setup() {
    const leftDrawerOpen = ref(true);
    const rightDrawerOpen = ref(false);
    const userStore = useUserStore()
    const user:User = userStore.$state
    return {
      user,
      linksList,
      leftDrawerOpen,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
