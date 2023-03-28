import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { ICustomerRequest } from "../../interfaces";

const createCustomerService = async (userData: ICustomerRequest) => {
  const customerRepository = AppDataSource.getRepository(Customer);

  const customer = customerRepository.create(userData);

  await customerRepository.save(customer);

  return customer;
};

export default createCustomerService;
