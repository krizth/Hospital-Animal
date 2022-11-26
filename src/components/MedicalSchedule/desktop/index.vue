<template>
  <ui-card>
    <template v-slot:title>
      Agenda
    </template>
    <template v-slot:close>
      {{}}
    </template>
    <template v-slot:body>
      <q-splitter v-model="calendarSplitter">
        <template v-slot:before>
          <div class="q-pa-md">
            <q-date
              v-model="date"
              :events="events"
              event-color="orange"
              color="primary"
              today-btn
              years-in-month-view
            />
          </div>
        </template>
        <template v-slot:separator>
          <q-btn
            color="accent"
            text-color="white"
            size="10px"
            dense
            round
            icon="drag_indicator"
          />
        </template>
        <template v-slot:after>
          <div class="q-pa-sm" v-if="date">
            <q-btn  icon="ion-add" color="accent" round @click="toggleEventDialog">
                <q-tooltip>
                  Agregar Atención
                </q-tooltip>
            </q-btn>
          </div>
          <q-tab-panels
            v-model="date"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel
              v-for="day in calendar.$state.days"
              :name="day.date"
              :key="day.date"
              class="q-pa-none bg-card"
            >

              <q-splitter v-model="eventsSplitter" style="height: 430px">
                <template v-slot:before>
                  <q-item-label header>Horas Programadas</q-item-label>
                  <q-scroll-area
                    style="width: 300px; height: 88%"
                    class="q-pa-md"

                  >
                    <q-list
                      padding
                      class="rounded-borders "
                      style="max-width: 20vw"
                    >
                      <q-item
                        @click="selectedEvent(ev)"
                        clickable
                        v-ripple
                        :focused="event?.uid===ev.uid"
                        v-for="ev in day.events"
                        :key="ev.uid"
                      >
                        <q-item-section avatar top>
                          <q-avatar
                            icon="ion-ios-time"
                            color="primary"
                            text-color="white"
                          />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label lines="1">{{ev.patient.name}}</q-item-label>
                          <q-item-label caption>{{`${ev.start} - ${ev.end}` }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-scroll-area>
                </template>
                <template v-slot:separator>
                  <q-btn
                    color="accent"
                    text-color="white"
                    size="10px"
                    dense
                    round
                    icon="drag_indicator"
                  />
                </template>
                <template v-slot:after v-if="event?.uid">
                  <q-tab-panels v-model="event" />
                  <q-tab-panel :name="event?.uid">
                    <q-tab-panel :name="event?.uid" class="q-pa-none">
                      <q-card class="bg-card" flat bordered>
                        <q-card-section horizontal>
                          <q-card-section class="q-pa-md">
                            <div class="text-overline">
                              {{ event?.client.name }}
                            </div>
                            <div class="text-h5 q-mt-sm q-mb-xs">
                              {{ event?.patient.name }}
                            </div>
                            <div class="text-caption text-grey">
                              {{ event?.description }}
                            </div>
                          </q-card-section>

                          <q-card-section class="col-5 flex flex-center">
                            <q-avatar size="10vh">
                              <q-img
                                class="rounded-borders"
                                :src="`https://ui-avatars.com/api/?name=${event?.client.name?.replace(
                                ' ',
                                '+'
                              )}`"
                              />
                            </q-avatar>
                          </q-card-section>
                        </q-card-section>

                        <q-separator />

                        <q-card-actions>
                          <q-btn flat round icon="event" />
                          <div class="q-mx-md flex" flat>
                            {{ event?.start }}
                          </div>
                          <div flat round>
                            {{ event?.end }}
                          </div>
                        </q-card-actions>
                      </q-card>
                    </q-tab-panel>
                  </q-tab-panel>
                </template>
              </q-splitter>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </template>
  </ui-card>
  <create-medical-event v-model:date="date" v-model:show="addEventDialog" />
</template>

<script lang="ts">
import UiCard from 'components/ui/uiCard.vue';

import {useMedicalSchedule} from '../MedicalScheduleController';
import CreateMedicalEvent from 'components/MedicalSchedule/desktop/create.vue';
export default {
  name: 'desktop-view',
  components: {CreateMedicalEvent, UiCard},
  setup(){
    const {
      calendar,
      event,
      selectedEvent,
      calendarSplitter,
      eventsSplitter,
      addEventDialog,
      date,
      toggleEventDialog,
      events} = useMedicalSchedule();

    return {
      calendar,
      event,
      selectedEvent,
      calendarSplitter,
      eventsSplitter,
      date,
      addEventDialog,
      toggleEventDialog,
      events,
    };
  }

}
</script>

<style scoped>

</style>
