export interface CalendarHour {
  uid: string;
  description: string;
  emergency: boolean;
  commissionPayed: boolean;
  date:Date;
  start: string;
  end: string;
  scheduledBy:Scheduler
}
export interface Scheduler{
  entity:string;
  uid:string;
}
export interface Location{
  address:string;
  coordinates:Coordinates;
}
export interface Coordinates{
  lat:number;
  lng:number;
}
export interface Patient{
  uid:string;
  name:string;
  age: number;
  ageUnity:string;
  specie:string;
  birthControl:string;
  weight:number;
  weightUnit:string
  location:Location;
}
export interface Client{
  uid:string;
  name:string;
  age: number;
  location:Location;
  responsibleOf:Array<Patient>
}
