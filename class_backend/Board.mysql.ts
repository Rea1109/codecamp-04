import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  // @PrimaryGeneratedColumn("uuid")
  // id!:string;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;
}
