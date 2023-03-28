import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors";
import { ICustomerContactUpdate } from "../../interfaces";

export const updateContactService = async (
  contactId: string,
  contactData: ICustomerContactUpdate
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contactToUpdate = await contactRepository
    .findOneByOrFail({
      id: contactId,
    })
    .catch(() => {
      throw new AppError("contact not found!", 404);
    });

  const updatedContact = contactRepository.create({
    ...contactToUpdate,
    ...contactData,
  });

  await contactRepository.save(updatedContact);

  return updatedContact;
};
