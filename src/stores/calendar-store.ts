import { defineStore } from 'pinia';

export const useCounterStore = defineStore('calendar', {
  state: () => ({
    establishmentUid: 'establishmentUID------1',
    takenHours: [
      {
        uid: 'calendarUID----1',
        date: '2022-11-05',
        start: '23:12:05',
        end: '23:42:35',
        description: 'Paciente con corte en la pierna',
        commissionPayed: false,
        emergency: false,
        scheduledBy: {
          entity: 'client',
          uid: 'fistClientUID-----------------------------',
        },
        patient: {
          uid: 'fistPatientUID-----------------------------',
          name: 'First Patient',
        },
        client: {
          uid: 'fistClientUID-----------------------------',
          name: 'First Client',
        },
      },
      {
        uid: 'calendarUID----2',
        date: '2022-11-05',
        start: '23:12:35',
        end: '23:42:35',
        description: 'Paciente con corte en la pierna',
        commissionPayed: false,
        scheduledBy: {
          entity: 'client',
          uid: 'secondClientUID-----------------------------',
        },
        patient: {
          uid: 'secondPatientUID-----------------------------',
          name: 'Second Patient',
        },
        client: {
          uid: 'fistClientUID-----------------------------',
          name: 'Second Client',
        },
      },
    ],
  }),

  getters: {},

  actions: {},
});
