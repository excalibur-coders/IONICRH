import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { user } from "./user";

@Entity()
export class documentos {
    @PrimaryGeneratedColumn({ type: "int" })
    docs_id!: number;

    @Column({
        type: "varchar",
    })
    docs_path!: string;

    @Column({
        type: "varchar",
    })
    docs_type!: string;

    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.docs)
    _fk__user_!: user
}
