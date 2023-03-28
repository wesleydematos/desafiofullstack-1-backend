import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors";

export const deleteContactService = async (
  contactId: string
): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactToDelete = await contactRepository
    .findOneByOrFail({
      id: contactId,
    })
    .catch(() => {
      throw new AppError("contact not found!", 404);
    });

  await contactRepository.remove(contactToDelete);
};
