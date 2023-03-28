import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { Customer } from "../../entities/customers.entity";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces";

const createContactService = async (userData: IContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const customerRepository = AppDataSource.getRepository(Customer);

  const customer = await customerRepository
    .findOneByOrFail({
      id: userData.customerId,
    })
    .catch(() => {
      throw new AppError("Invalid customer id!", 404);
    });

  const contact = contactRepository.create({ ...userData, customer: customer });

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
