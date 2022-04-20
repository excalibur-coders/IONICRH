import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn
} from "typeorm";
import { cargo } from "./cargo";
import { empresa_contratante } from "./emp_contratante";
import { empresa_PJ } from "./emp_pj";

import { user } from "./user";
export type Contratacao_type = "Pessoa Juridica" | "CLT" | "Estagio" | "Temporario"
@Entity()
export class contrato {
    @PrimaryGeneratedColumn({ type: "int" })
    contrato_id!: number;

    @Column({
        type: "varchar",
    })
    contrato_base!: string;

    @Column({
        type: "varchar",
    })
    contrato_adimissao!: string;

    @Column({
        type: "varchar",
    })
    contrato_matricula!: string;
    
    @Column({
        type: "varchar",
        length: 2000
    })
    contrato_turno!: string;

    @Column({
        type: "varchar",
    })
    contrato_tempo_de_casa!: string;

    @Column({
        type: "varchar",
    })
    contrato_termos!: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    contrato_tempo_formalizacao!: string;

    // User ?? Dominio = site e afins
    @Column({
        type: "varchar",
    })
    contrato_dominio!: string;

    @Column({
        type: "set",
        enum: [ "Pessoa Juridica" , "CLT" , "Estagio" , "Temporario"],
        default: "Temporario"
    })
    contrato_tipo!: Contratacao_type[];

    @Column({
        type: "float",
    })
    contrato_faixa_salarial!: number;

    @Column({
        type: "float",
    })
    contrato_plano_saude!: number;

    @Column({
        type: "float",
    })
    contrato_vale_transporte!: number;

    @Column({
        type: "float",
        nullable: true
    })
    contrato_vale_refeicao!: number;

    @Column({
        type: "float",
        nullable: true
    })
    contrato_vale_alimentacao!: number;

    @Column({
        type: "float",
        nullable: true
    })
    contrato_auxilio_creche!: number;

    // Pesquisas de desligamento
    @Column({
        type: "varchar",
        nullable: true
    })
    contrato_data_desligamento!: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    contrato_distrato!: string;

    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.contrato)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId!: number

    @ManyToOne(() => empresa_contratante, (emp_contratante) => emp_contratante.contrato)
    @JoinColumn({
        name: "empContratanteContratanteId"
    })
    emp_contratante!: empresa_contratante
    @Column({
        type: "int"
    })
    empContratanteContratanteId?: number

    @ManyToOne(() => empresa_PJ, (emp_pj) => emp_pj.contrato)
    emp_pj!: empresa_PJ

    @ManyToOne(() => cargo, (cargo) => cargo.contrato)
    @JoinColumn({
        name: "cargoCargoId"
    })
    cargo!: cargo
    @Column({
        type: "int"
    })
    cargoCargoId?: number
}
