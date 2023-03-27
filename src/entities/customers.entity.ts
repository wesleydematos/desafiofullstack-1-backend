import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("customers")
export class Customer {
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

  @OneToMany(() => Contact, (contact) => contact.customer)
  contacts: Contact[];
}
