import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Establishment } from 'components/models';
export const useCounterStore = defineStore('establishment', {
  state: () => ({
    uid: 'establishmentUID------------------------1',
    location: {
      address: 'Picarte 3000 ,Valdivia, Región de los Ríos',
      coordinates: {
        lat: '-45.23353456',
        lng: '-73.567567567556',
      },
    },
    interval: 30,
    active: true,
    officeHours: {
      urgency: true,
      start: '09:00',
      end: '17:00',
    },
    avatar: 'https://ui-avatars.com/api/?name=Primer+Usuario',
    celNumber: '+56954682197',
    mail: 'mail@example.com',
    specialities: [
      'SpecialityUID1',
      'SpecialityUID2',
      'SpecialityUID3',
      'SpecialityUID4',
    ],
    races: ['Race1', 'Race2', 'Race3'],
    species: ['SpecialityUID1', 'SpecialityUID2', 'SpecialityUID3'],
    requiresCommission: false,
    name: 'Example establishment',
  }),

  getters: {},

  actions: {
    async storeEstablishment(establishment: Establishment) {
      return await api.post('/establishment', establishment);
    },
    async updateEstablishment(establishment: Establishment) {
      return await api.put('/establishment', establishment)
    }
  },
});
