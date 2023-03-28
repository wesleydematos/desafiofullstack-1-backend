import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";

export const listContactsByCustomerService = async (customerId: string) => {
  const customerRepository = AppDataSource.getRepository(Customer);

  const customers = await customerRepository.findOne({
    where: {
      id: customerId,
    },
    relations: {
      contacts: true,
    },
  });

  return customers;
};
