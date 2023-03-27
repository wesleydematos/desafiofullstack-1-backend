import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { AppError } from "../../errors/appError";
import { ICustomerUpdate } from "../../interfaces";

export const updateCustomerService = async (
  customerId: string,
  customerData: ICustomerUpdate
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
