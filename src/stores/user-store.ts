import { defineStore } from 'pinia';

export const useCounterStore = defineStore('user', {
  state: () => ({
    counter:0,
   user:{
    uid:'fistUserUID-----------------------------',
     name:'Primer Usuario',
     age:30,
     location:{
      address:'Picarte 3000 ,Valdivia, Región de los Ríos',
       coordinates:{
        lat:'-45.23353456',
         lng:'-73.567567567556'
      }
     },
     interval:30,
     active:true,
     officeHours:{
      urgency:true,
       start:'09:00',
       end:'17:00'
     },
     avatar:'https://ui-avatars.com/api/?name=Primer+Usuario',
     celNumber:'+56954682197',
     mail:'mail@example.com',
     specialities:['SpecialityUID1','SpecialityUID2','SpecialityUID3','SpecialityUID4'],
     species:['SpecialityUID1','SpecialityUID2','SpecialityUID3'],
     rating:4.5,
     requiresCommission:false,

   },


  }),
  getters: {

  },
  actions: {

  },
});
