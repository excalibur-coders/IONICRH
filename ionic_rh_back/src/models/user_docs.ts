import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class documentos {
    @PrimaryGeneratedColumn({ type: "int" })
    docs_id!: number;

    @Column({
        type: "varchar",
        nullable: true
    })
    docs_nome!: string;
    @Column({
        type: "longtext",
        nullable: true
    })
    docs_url!: string;
    @Column({
        type: "longtext",
        nullable: true
    })
    docs_key!: string;
    @Column({
        type: "float",
        nullable: true
    })
    docs_size!: number;
    @Column({
        type: "varchar",
        nullable: true
    })
    docs_type!: string;
    @Column({
        type: "varchar",
        nullable: true
    })
    docs_header!: string;



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
