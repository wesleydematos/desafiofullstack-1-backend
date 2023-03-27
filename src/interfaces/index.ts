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

export interface ICustomerUpdate {
  name?: string;
  email?: string;
  phoneNumber?: string;
}
