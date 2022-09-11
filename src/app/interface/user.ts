import { Address } from './address';
import { Bank } from './bank';

//transfom the json to interface by using transform.tools

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  domain: string;
  address: string;
  bank: Bank;
}
