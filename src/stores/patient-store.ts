import { defineStore } from 'pinia';

export const useCounterStore = defineStore('patient', {
  state: () => ({
    patient:{
      uid:'fistPatientUID-----------------------------',
      name:'Primer patient',
      age: 30,
      ageUnit:'months',
      specie:'Cat',
      birthControl:'esterilizado',
      weight:3.5,
      weightUnit:'kg'
    }
  }),

  getters: {

  },

  actions: {

  }
});
