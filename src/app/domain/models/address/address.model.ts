import { Geolocation } from '../geolocation/geolocation.model';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}
