import { Router } from "express";
import {
  createCustomerController,
  deleteCustomerController,
  listCustomersController,
  updateCustomerController,
} from "../../controllers/customers";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { ensureInputIsUuidMiddleware } from "../../middlewares/ensureInputIsUuid.middleware";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "../../schemas/customerSchema";

export const customerRouters = Router();

customerRouters.post(
  "",
  ensureDataIsValidMiddleware(createCustomerSchema),
  createCustomerController
);
customerRouters.get("", listCustomersController);
customerRouters.patch(
  "/:id",
  ensureInputIsUuidMiddleware,
  ensureDataIsValidMiddleware(updateCustomerSchema),
  updateCustomerController
);
customerRouters.delete("/:id", deleteCustomerController);
