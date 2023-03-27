import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICustomerContactRequest } from "../interfaces";

export const createCustomerSerializer: SchemaOf<ICustomerContactRequest> = yup
  .object()
  .shape({
    name: yup.string().max(50).required(),
    email: yup.string().max(50).required(),
    phoneNumber: yup.string().max(15).required(),
  });
