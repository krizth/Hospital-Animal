import { defineStore } from 'pinia';
import { Patient } from 'components/models';

export const usePatientStore = defineStore('patient', {
  state: () =>
    ({
      uid: 'fistPatientUID-----------------------------',
      name: 'Primer patient',
      age: 30,
      ageUnit: 'months',
      specie: 'Cat',
      birthControl: 'esterilizado',
      weight: 3.5,
      weightUnit: 'kg',
      location: {
        address: 'Picarte 3000 ,Valdivia, Región de los Ríos',
        coordinates: {
          lat: 51.5,
          lng: -0.1,
        },
      },
    } as Patient),

  getters: {},

  actions: {},
});
