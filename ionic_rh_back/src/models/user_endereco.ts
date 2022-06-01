import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class endereco {
    @PrimaryGeneratedColumn({ type: "int" })
    endereco_id!: number;

    @Column({
        type: "varchar",
    })
    endereco_pais!: string;

    @Column({
        type: "varchar",
    })
    endereco_bairro!: string;

    @Column({
        type: "varchar",
    })
    endereco_cidade!: string;

    @Column({
        type:"varchar",
    })
    endereco_cep!: string;

    @Column({
        type: "varchar",
    })
    endereco_estado!: string;

    @Column({
        type: "varchar",
    })
    endereco_numero!: string;
    @Column({
        type: "varchar",
    })
    endereco_rua!: string;
    @Column({
        type: "varchar",
    })
    endereco_compl!: string;
    // Chave estrangeira
    @ManyToOne(() => user, (user) => user.endereco)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number
}