import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class documentos {
    @PrimaryGeneratedColumn({ type: "int" })
    docs_id!: number;

    @Column({
        type: "varchar",
    })
    docs_nome!: string;
    @Column({
        type: "varchar",
    })
    docs_url!: string;
    @Column({
        type: "float",
    })
    docs_size!: number;
    @Column({
        type: "varchar",
    })
    docs_type!: string;



    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.docs)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number
}
