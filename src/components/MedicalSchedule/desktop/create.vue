<template>
  <q-dialog v-model:model-value="showModal">
    <ui-card class="bg-white">
      <template v-slot:close>
        <q-btn round dense flat icon="ion-close" @click="toggleEventDialog" />
      </template>
      <template  v-slot:title>
        <div class="q-pt-md">
          Agendar para el día: {{event.date}}
        </div>
      </template>
      <template v-slot:body>
        <div class="col">
          <q-input label="Descripción" v-model:model-value="event.description" type="textarea"/>
            <div class="row" >
              <div class="col-6 q-pr-md">
                <q-select label="Cliente" :options="['cliente 1','cliente 2']"/>
              </div>
              <div class="col-6 q-pl-md">
                <q-select label="Paciente" :options="['Paciente 3','Paciente 4']"/>
              </div>


            </div>
              <div class="row medical-event-gap-fields" >
                <q-input label="Hora de llegada"  v-model="event.start" mask="time" :rules="['time']">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time v-model="event.start">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input label="Hora de termino"  v-model="event.end" mask="time" :rules="['time']">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time v-model="event.start">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
      </template>
    </ui-card>
  </q-dialog>
</template>

<script>
import UiCard from 'components/ui/uiCard.vue';

import {useCreateMedicalEvent} from '../MedicalScheduleController';

export default {
  name: 'create-medical-event',
  components: {UiCard},
  props:{
    date:{
      type: String,
      required: true,
      default:''
    },
    show:{
      type:Boolean,
      required: true,
      default:false
    }
  },
  emits:['update:date','update:show'],
  setup(props,{emit}){

    const {addNewEvent,event,showModal,toggleEventDialog } = useCreateMedicalEvent(props,emit)
    return {addNewEvent,event,showModal,toggleEventDialog}
  }
}
</script>

<style scoped>
.medical-event-gap-fields{
  gap:30px
}
</style>
