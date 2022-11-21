export interface Event {
  uid?: string;
  description: string;
  emergency: boolean;
  commissionPayed: boolean;
  date: string;
  start: string;
  end: string;
  scheduledBy: Scheduler;
  client: Client;
  patient: Patient;
}
export interface User {
  uid?: string;
  name: string;
  email: string;
  age?: number;
  avatar: string;
}
export interface Scheduler {
  entity: string;
  uid: string;
}
export interface Location {
  address: string;
  coordinates: Coordinates;
}
export interface Coordinates {
  lat: number;
  lng: number;
}
export interface Patient {
  uid?: string;
  name: string;
  age: number;
  ageUnit: string;
  specie: string;
  race: string;
  birthControl: string;
  weight: number;
  weightUnit: string;
  location: Location;
}
export interface Client extends User {
  location: Location;
  responsibleOf?: Array<Patient>;
}

export interface Establishment {
  uid?: string;
  location: Location;
  owner: User;
  interval: number;
  active: boolean;
  officeHours: OfficeHours;
  avatar: string;
  cellNumber: string;
  specialities: Array<string>;
}
export interface OfficeHours {
  urgency: boolean;
  start: string;
  end: string;
  days: Array<string>;
}
export interface Token {
  access_token: string | undefined;
  token_type: string | undefined;
  expires_in?: number | undefined;
  id_token: string | undefined;
  provider_id: string | undefined;
  sign_in_method: string | undefined;
}
export type EmailAndPasswordCredentials ={
  email: string;
  password: string;
}
