import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { AppError } from "../../errors";
import { ICustomerContactUpdate } from "../../interfaces";

export const updateCustomerService = async (
  customerId: string,
  customerData: ICustomerContactUpdate
): Promise<Customer> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const customerToUpdate = await customerRepository
    .findOneByOrFail({
      id: customerId,
    })
    .catch(() => {
      throw new AppError("customer not found!", 404);
    });

  const updatedCustomer = customerRepository.create({
    ...customerToUpdate,
    ...customerData,
  });

  await customerRepository.save(updatedCustomer);

  return updatedCustomer;
};
