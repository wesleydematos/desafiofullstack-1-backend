import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICustomerRequest, ICustomerUpdate } from "../interfaces";

export const createCustomerSchema: SchemaOf<ICustomerRequest> = yup
  .object()
  .shape({
    name: yup.string().max(50).required(),
    email: yup.string().max(50).required(),
    phoneNumber: yup.string().max(15).required(),
  });

export const updateCustomerSchema: SchemaOf<ICustomerUpdate> = yup
  .object()
  .shape({
    name: yup.string().max(50).notRequired(),
    email: yup.string().max(50).notRequired(),
    phoneNumber: yup.string().max(15).notRequired(),
  });
