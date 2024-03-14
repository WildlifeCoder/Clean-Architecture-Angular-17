export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}

interface Geolocation {
  lat: string;
  lng: string;
}
