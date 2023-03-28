import { Request, Response } from "express";
import {
  ICustomerContactUpdate,
  ICustomerRequest,
  ICustomerResponse,
} from "../../interfaces";
import createCustomerService from "../../services/customers/createCustomer.service";
import { deleteCustomerService } from "../../services/customers/deleteCustomer.service";
import { listCustomersService } from "../../services/customers/listCustomers.service";
import { updateCustomerService } from "../../services/customers/updateCustomer.service";

export const createCustomerController = async (req: Request, res: Response) => {
  const customerData: ICustomerRequest = req.body;
  const newCustomer = await createCustomerService(customerData);

  return res.status(201).json(newCustomer);
};

export const listCustomersController = async (req: Request, res: Response) => {
  const allCustomers: ICustomerResponse[] = await listCustomersService();

  return res.json(allCustomers);
};

export const updateCustomerController = async (req: Request, res: Response) => {
  const customerData: ICustomerContactUpdate = req.body;
  const customerId: string = req.params.id;

  const updatedCustomer = await updateCustomerService(customerId, customerData);

  return res.json(updatedCustomer);
};

export const deleteCustomerController = async (req: Request, res: Response) => {
  const customerId: string = req.params.id;
  await deleteCustomerService(customerId);

  return res.status(204).json({});
};
