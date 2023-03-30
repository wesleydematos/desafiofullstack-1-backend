import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { customerRouters } from "./routes/customers";
import { contactRouters } from "./routes/contacts";
import { handleError } from "./errors";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/customers", customerRouters);
app.use("/contacts", contactRouters);

app.use(handleError);

export default app;
