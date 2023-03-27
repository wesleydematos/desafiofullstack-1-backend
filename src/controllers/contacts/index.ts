import { Request, Response } from "express";

import { ICustomerRequest } from "../../interfaces";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contactRequest: ICustomerRequest = req.body;
  const data = await createContactService(contactRequest);

  return res.status(201).json(data);
};

export { createContactController };
