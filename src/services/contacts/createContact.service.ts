import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { ICustomerRequest } from "../../interfaces";

const createContactService = async (userData: ICustomerRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  //implementar logica pro userdata
  const contact = contactRepository.create(userData);

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
