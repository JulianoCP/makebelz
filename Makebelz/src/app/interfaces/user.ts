export interface User {
  id?: string;
  name?: string;
  city?: string;
  number?: string;
  district?: string; // bairro
  streetName?: string; // rua
  phone?: string;

  createAt?: number;
  userId?: string;
}
