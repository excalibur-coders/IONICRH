import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { contrato } from "./contrato";

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
        type: "date"
    })
    pj_fundacao!: string;

    @Column({
        type: "varchar",
    })
    pj_conduta_etica!: string;

    //Chave estrangeiras
    @OneToMany(() => contrato, (contrato) => contrato.emp_pj)
    contrato!: contrato
}
