import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    name = "";

    @Column("text")
    desc = "";
}