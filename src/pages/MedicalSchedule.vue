<template>
  <q-page padding>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <div class="q-pa-md">
          <q-date
            v-model="date"
            :events="events"
            event-color="orange"
            style="min-width: 300px; min-height: 320px"
          />
        </div>
      </template>
      <template v-slot:separator>
        <q-btn
          color="primary"
          text-color="white"
          size="10px"
          dense
          round
          icon="drag_indicator"
        />
      </template>
      <template v-slot:after>
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
          >
            <q-splitter v-model="event" style="height: 430px">
              <template v-slot:before>
                <q-scroll-area
                  style="width: 300px; height: 320px"
                  class="q-pa-md"
                >
                  <q-list
                    bordered
                    padding
                    class="rounded-borders"
                    style="max-width: 350px"
                  >
                    <q-item-label header>Horas Programadas</q-item-label>
                    <q-item
                      @click="selectedEvent(ev)"
                      clickable
                      v-ripple
                      v-for="ev in day.events"
                      :key="ev.uid"
                    >
                      <q-item-section avatar top>
                        <q-avatar
                          icon="ion-ios-time"
                          color="accent"
                          text-color="white"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label lines="1">{{
                          ev.patient.name
                        }}</q-item-label>
                        <q-item-label caption>{{
                          `${ev.start} - ${ev.end}`
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-scroll-area>
              </template>
              <template v-slot:separator>
                <q-btn
                  color="primary"
                  text-color="white"
                  size="10px"
                  dense
                  round
                  icon="drag_indicator"
                />
              </template>
              <template v-slot:after v-if="!!event">
                <q-tab-panels v-model="event" />
                <q-tab-panel :name="event?.uid">
                  <q-tab-panel :name="event?.uid">
                    <q-card class="my-card" flat bordered>
                      <q-card-section horizontal>
                        <q-card-section class="q-pt-xs">
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useCalendarStore } from 'stores/calendar-store';
import { Event } from 'components/Calendar/model';

export default defineComponent({
  name: 'MedicalSchedule',
  setup() {
    const calendar = useCalendarStore();
    const events = computed(() => calendar.events);
    const event = ref<Event>();
    const selectedEvent = (ev: Event) => (event.value = ev);
    return {
      calendar,
      event,
      selectedEvent,
      splitterModel: ref(30),
      date: ref('2022/11/05'),
      events,
    };
  },
});
</script>
