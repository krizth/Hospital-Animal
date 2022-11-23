import {defineStore} from 'pinia';
import {Calendar} from 'components/Calendar/model';
import {Client, Entity, Patient} from 'components/models';

export const useCalendarStore = defineStore('calendar', {
  state: () =>
    ({
      days: [
        {
          date: '2022/11/05',
          events: [
            {
              uid: 'calendarUID----1',
              start: '23:12:05',
              end: '23:42:35',
              description: 'Paciente con corte en la pierna',
              commissionPayed: false,
              emergency: false,
              scheduledBy: {
                entity: Entity.Client,
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
              start: '23:12:35',
              end: '23:42:35',
              description: 'Paciente con corte en la oreja',
              commissionPayed: false,
              scheduledBy: {
                entity: Entity.Client,
                uid: 'secondClientUID-----------------------------',
              },
              patient: {
                uid: 'secondPatientUID-----------------------------',
                name: 'Second Patient',
                age: 30,
                ageUnit: 'years',
                weight: 3.4,
                weightUnit: 'kg',
                specie: 'Perro',
                race: 'chihuahua',
                birthControl: 'castrado',
                location: {
                  address: 'Picarte 3000',
                  coordinates: {
                    lat: 45.5,
                    lng: -122.5,
                  },
                },
              } as Patient,
              client: {
                uid: 'fistClientUID-----------------------------',
                name: 'Second Client',
                age: 30,
                location: {
                  address: 'Picarte 3000',
                  coordinates: {
                    lat: 45.5,
                    lng: -122.5,
                  },
                },
              } as Client,
            },
          ],
        },
      ],
    } as Calendar),

  getters: {
    events(state) {
      return state.days.map((x) => x.date);
    },
  },

  actions: {},
});
