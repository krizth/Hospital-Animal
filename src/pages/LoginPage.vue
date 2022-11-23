<template>
  <q-page padding>
    <div class="row">
      <q-form class="col-12 col-lg-6 offset-lg-3 q-mt-xl col-md-6 offset-md-3" @submit.prevent="emailAndPassword(login,routerPush)">
        <ui-card class="bg-white" style="opacity: 0.7">
          <template v-slot:title> Login </template>
          <template v-slot:close> {{}} </template>
          <template v-slot:body>
            <q-input
              required
              type="email"
              autocomplete="email"
              label="Correo"
              v-model:model-value="login.email"
              hint="mail@example.cl"
            />
            <q-input
              required
              autocomplete="current-password"
              label="Contraseña"
              v-model:model-value="login.password"
              type="password"
            />
           <div class="text-center q-pt-xl">
             <q-btn-group unelevated push spread rounded >
               <q-btn @click="setEntity('Professional')" :class="{[entity==='Professional'?'bg-primary':'white']:true}" no-caps push label="Profesional" icon="medical_services" />
               <q-btn @click="setEntity('Client')" :class="{[entity==='Client'?'bg-primary':'white']:true}"  no-caps push label="Dueño" icon="waling-with-pet" />
             </q-btn-group>
           </div>
          </template>
          <template v-slot:custom-actions>
            <q-card-actions
              align="center"
              class="text-center q-mx-sm"
              style="gap: 10px"
            >
              <ui-btn
                class="full-width"
                color="accent"
                label="Ingresar"
                type="submit"
              />
              <ui-btn
                class="full-width"
                icon="ion-logo-google"
                label="Google"
                @click="loginWithGoogle"
                :loading="isLoading"
              />
              <ui-btn
                class="bg-facebook full-width"
                color="bg-facebook"
                icon="ion-logo-facebook"
                label="Facebook"
              />
            </q-card-actions>
          </template>
        </ui-card>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import UiCard from 'components/ui/uiCard.vue';
import UiBtn from 'components/ui/uiBtn.vue';
import {defineComponent, onMounted, ref} from 'vue';
import {useAuthStore} from 'stores/authentification-store';
import {Notify} from 'quasar';
import {useRouter} from 'vue-router';
import type {EmailAndPasswordCredentials} from 'components/models';
import {Entity} from 'components/models';

export default defineComponent({
  name: 'LoginPage',
  components: {
    UiCard,
    UiBtn,
  },
  setup() {
    const useAuth = useAuthStore();
    const routerPush = useRouter().push;
    const isLoading= ref(false);
    const entity= ref<Entity>(Entity.Professional)
    const loginWithGoogle = useAuth.loginWithGoogle;
    const emailAndPassword = useAuth.loginWithEmailAndPassword;
    const setEntity= (entityKey:string)=>{
      switch (entityKey) {
        case Entity.Professional:
          entity.value = Entity.Professional;
          break;
        case Entity.Client:
          entity.value = Entity.Client;
          break;
      }
    }
    onMounted(async ()=>{
      useAuth.redirectResponse(routerPush)
        .catch((e)=>{
          Notify.create({
            message:e.message,
            type:'error'
          })
        })

    })
    const login = ref<EmailAndPasswordCredentials>({
      email: '',
      password: '',
    });
    return {
      entity,
      Entity,
      setEntity,
      loginWithGoogle,
      emailAndPassword,
      isLoading,
      routerPush,
      login,
    };
  },
});
</script>
