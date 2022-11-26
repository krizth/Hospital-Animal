import {computed, ref} from 'vue';
import {useCalendarStore} from 'stores/calendar-store';
import type { Event,CreateMedicalEventProps} from 'components/MedicalSchedule/model';
import {date as QuasarDate} from 'quasar'
import type {Client, Entity, Patient} from 'components/models';

const  useMedicalSchedule = () =>  {
  const calendar = useCalendarStore();
  const events = computed(() => calendar.events);
  const event = ref<Event>({
    description: '',
    emergency: false,
    commissionPayed: false,
    date: '',
    start: '',
    end: '',
    uid:'',
    scheduledBy: {
      name: '' as Entity,
      entity: {
        name: '',
        email: '',
        avatar: ''
      }
    },
    client: {
      uid:'',
      avatar:'',
      age:NaN,
      name:'',
      location:{
        address:'',
        coordinates:{
          lat:NaN,
          lng:NaN
        }
      },
      email:'',
      responsibleOf:[]
    } as Client,
    patient: {
      uid:'',
      location:{
        address:'',
        coordinates:{
          lat:NaN,
          lng:NaN
        }
      },
      age:NaN,
      specie:'',
      weight:NaN,
      ageUnit:'',
      name:'',
      birthControl:'',
      race:'',
      weightUnit:''
    } as Patient,
  });
  const calendarSplitter=ref<number>(32)
  const eventsSplitter = ref<number>(45)
  const selectedEvent = (ev: Event) => (event.value = ev);
  const date = ref<string>(QuasarDate.formatDate(Date.now(), 'YYYY/MM/DD'));
  const addEventDialog = ref<boolean>(false)
  const toggleEventDialog = ()=>(addEventDialog.value=!addEventDialog.value)
  return {
    calendar,
    event,
    selectedEvent,
    toggleEventDialog,
    addEventDialog,
    calendarSplitter,
    eventsSplitter,
    date,
    events,
  };
}
const useCreateMedicalEvent = (props:CreateMedicalEventProps,emit:(e:string,v:boolean|string)=>void) => {
  const calendar = useCalendarStore();
  const addNewEvent = calendar.addEvent
  const showModal = computed({
    get:()=>props.show,
    set:val=>emit('update:show',val)
  })
  const toggleEventDialog = ()=>(showModal.value=!showModal.value)
  const date =computed({get:()=>props.date,set:val=>emit('update:date',val)})
  const event = ref<Event>({
    commissionPayed: false,
    date: date.value,
    emergency: false,
    end: '',
    start: '',
    description: '',
    client: {
      uid:'',
      avatar:'',
      name:'',
      email:''
    },
    patient: {} as Patient,
    scheduledBy: {
      name: '' as Entity,
      entity: {
        name: '',
        email: '',
        avatar: ''
      }
    }
  });
  return {event,addNewEvent,showModal,toggleEventDialog}
}
export {useMedicalSchedule,useCreateMedicalEvent}
