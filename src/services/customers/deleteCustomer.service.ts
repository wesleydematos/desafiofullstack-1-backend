import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { AppError } from "../../errors/appError";

export const deleteCustomerService = async (
  customerId: string
): Promise<void> => {
  const customerRepository = AppDataSource.getRepository(Customer);

  const customerToDelete = await customerRepository
    .findOneByOrFail({
      id: customerId,
    })
    .catch(() => {
      throw new AppError("customer not found!", 404);
    });

  await customerRepository.remove(customerToDelete);
};
