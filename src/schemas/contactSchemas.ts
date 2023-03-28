import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, ICustomerContactUpdate } from "../interfaces";

export const createContactSchema: SchemaOf<IContactRequest> = yup
  .object()
  .shape({
    name: yup.string().max(50).required(),
    email: yup.string().max(50).required(),
    phoneNumber: yup.string().max(15).required(),
    customerId: yup.string().max(36).required(),
  });

export const updateContactSchema: SchemaOf<ICustomerContactUpdate> = yup
  .object()
  .shape({
    name: yup.string().max(50).notRequired(),
    email: yup.string().max(50).notRequired(),
    phoneNumber: yup.string().max(15).notRequired(),
  });
