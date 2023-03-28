import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";

export const listCustomersService = async (): Promise<Customer[]> => {
  const customerRepository = AppDataSource.getRepository(Customer);

  const allCustomers = await customerRepository.find();

  return allCustomers;
};
