import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";

export const listCustomersService = async (): Promise<Customer[]> => {
  const petRepository = AppDataSource.getRepository(Customer);

  const allPets = await petRepository.find();

  return allPets;
};
