import { Request, Response } from "express";

import { ICustomerContactRequest } from "../../interfaces";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contactRequest: ICustomerContactRequest = req.body;
  const data = await createContactService(contactRequest);

  return res.status(201).json(data);
};

export { createContactController };
