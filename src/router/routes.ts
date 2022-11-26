import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/HomePage.vue') },
      {
        path: '/medical-schedule',
        name: 'Schedule',
        component: () => import('pages/MedicalSchedule.vue'),
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/',

    component: () => import('layouts/IndexLayout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('pages/LoginPage.vue'),
      },
    ],
    meta: { requiresAuth: false },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
