export interface ICustomerRequest {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface ICustomerResponse {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  register_date: string;
}

export interface ICustomerContactUpdate {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export interface IContactRequest {
  name: string;
  email: string;
  phoneNumber: string;
  customerId: string;
}

export interface IContactResponse {
  name: string;
  email: string;
  phoneNumber: string;
  id: string;
  register_date: string;
}

export interface ICostumerByContactResponse {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  register_date: string;
  contacts: IContactResponse | [];
}
