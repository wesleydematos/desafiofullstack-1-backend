import { Router } from "express";
import { createContactController } from "../../controllers/contacts";

export const contactRouters = Router();

contactRouters.post("", createContactController);
contactRouters.get("");
contactRouters.patch("/:id");
contactRouters.delete("/:id");
