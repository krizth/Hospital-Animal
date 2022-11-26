import {defineStore} from 'pinia';
import type {Calendar, Day} from 'components/MedicalSchedule/model';

import { api } from 'src/boot/axios';
export const useCalendarStore = defineStore('calendar', {
  state: () =>
    (<Calendar>{

    }),

  getters: {
    events(state) {
      return state?.days?.map((x) => x.date) || [];
    },
  },

  actions: {
    async addEvent(event:Event):Promise<Event> {
      return (await api.post('/events', event));
    }
  },
});
