import type { Event } from '../models';


interface Day {
  events: Array<Event>;
  date: string;
}
interface Calendar {
  days: Array<Day>;
}
interface CreateMedicalEventProps{
  date: string;
  show: boolean;
}
export type { Event, Day, Calendar,CreateMedicalEventProps };
