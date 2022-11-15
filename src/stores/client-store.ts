import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', {
  state: () => ({
    uid: 'fistClientUID-----------------------------',
    name: 'Primer cliente',
    age: 30,
    location: {
      address: 'Picarte 3000,Valdivia, Región de los Ríos',
      coordinates: {
        lat: '-45.23353456',
        lng: '-73.567567567556',
      },
    },
    avatar: 'https://ui-avatars.com/api/?name=Primer+Cliente',
    celNumber: '+56954682197',
    mail: 'mail@example.com',
    responsibleOf: [
      {
        uid: 'fistPatientUID-----------------------------',
        name: 'Primer patient',
        age: 30,
        ageUnit: 'months',
        specie: 'Cat',
        birthControl: 'esterilizado',
        weight: 3.5,
        weightUnit: 'kg',
      },
      {
        uid: 'secondPatientUID-----------------------------',
        name: 'Segundo patient',
        age: 30,
        ageUnit: 'months',
        specie: 'Cat',
        birthControl: 'esterilizado',
        weight: 3.5,
        weightUnit: 'kg',
      },
    ],
  }),

  getters: {},

  actions: {},
});
