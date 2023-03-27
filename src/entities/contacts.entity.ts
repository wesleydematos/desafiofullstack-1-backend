import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Customer } from "./customers.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 15 })
  phoneNumber: string;

  @CreateDateColumn()
  register_date: string;

  @ManyToOne(() => Customer)
  customer: Customer;
}
