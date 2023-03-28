import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsByCustomerController,
  updateContactController,
} from "../../controllers/contacts";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { ensureInputIsUuidMiddleware } from "../../middlewares/ensureInputIsUuid.middleware";
import {
  createContactSchema,
  updateContactSchema,
} from "../../schemas/contactSchemas";

export const contactRouters = Router();

contactRouters.post(
  "",
  ensureDataIsValidMiddleware(createContactSchema),
  createContactController
);
contactRouters.get(
  "/:id",
  ensureInputIsUuidMiddleware,
  listContactsByCustomerController
);
contactRouters.patch(
  "/:id",
  ensureInputIsUuidMiddleware,
  ensureDataIsValidMiddleware(updateContactSchema),
  updateContactController
);
contactRouters.delete(
  "/:id",
  ensureInputIsUuidMiddleware,
  deleteContactController
);
