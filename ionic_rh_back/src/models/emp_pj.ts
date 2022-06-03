import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { contrato } from "./contrato";
import { user } from "./user";

@Entity()
export class empresa_PJ {
    @PrimaryGeneratedColumn({ type: "int" })
    pj_id!: number;

    @Column({
        type: "varchar",
    })
    pj_nome!: string;

    @Column({
        type: "varchar",
    })
    pj_cnjp!: string;

    @Column({
        type: "varchar",
    })
    pj_natureza_juridica!: string;

    @Column({
        type: "varchar"
    })
    pj_fundacao!: string;

    @Column({
        type: "varchar",
    })
    pj_conduta_etica!: string;

    //Chave estrangeiras
    /* @OneToMany(() => contrato, (contrato) => contrato.emp_pj)
    contrato!: contrato */
    @ManyToOne(() => user, (user) => user.emp_pj)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number
}