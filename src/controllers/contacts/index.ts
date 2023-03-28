import { Request, Response } from "express";
import { IContactRequest, ICustomerContactUpdate } from "../../interfaces";

import createContactService from "../../services/contacts/createContact.service";
import { deleteContactService } from "../../services/contacts/deleteContact.service";
import { listContactsByCustomerService } from "../../services/contacts/listContacts.service";
import { updateContactService } from "../../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const contactRequest: IContactRequest = req.body;
  const data = await createContactService(contactRequest);

  return res.status(201).json(data);
};

export const listContactsByCustomerController = async (
  req: Request,
  res: Response
) => {
  const customerId: string = req.params.id;
  const allContacts = await listContactsByCustomerService(customerId);

  return res.json(allContacts);
};

export const updateContactController = async (req: Request, res: Response) => {
  const contactData: ICustomerContactUpdate = req.body;
  const contactId: string = req.params.id;

  const updatedUser = await updateContactService(contactId, contactData);

  return res.json(updatedUser);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  await deleteContactService(contactId);

  return res.status(204).json({});
};
