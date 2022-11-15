import { Hour, StoredHour } from '../models';

export interface Calendar {
  hours: Array<StoredHour>;
}

export type { Hour };
