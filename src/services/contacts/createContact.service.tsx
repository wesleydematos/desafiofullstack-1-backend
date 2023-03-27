import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { ICustomerContactRequest } from "../../interfaces";

const createContactService = async (userData: ICustomerContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  //implementar logica pro userdata
  const contact = contactRepository.create(userData);

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
