import { Event } from '../models';

interface Day {
  events: Array<Event>;
  date: string;
}
interface Calendar {
  days: Array<Day>;
}
export type { Event, Day, Calendar };
