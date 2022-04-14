import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn
} from "typeorm";

import { USER } from "./user";
export type Contratacao_type = "Pessoa Juridica" | "CLT" | "Estagio" | "Temporario"
@Entity()
export class Contrato {
    @PrimaryGeneratedColumn({
        type: "int",
    })
    contrato_id!: number;

    @Column({
        type: "varchar",
        length: 255
    })
    contrato_base!: string;

    @Column({
        type: "char",
        length: 12
    })
    contrato_tempo_de_casa!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    contrato_termos!: string;

    @Column({
        type: "varchar",
        length: 12,
        nullable:true
    })
    contrato_tempo_formalizacao!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    contrato_dominio!: string;

    @Column({
        type: "varchar",
        length: 12,
        nullable:true
    })
    contrato_data_desligamento!: string;

    @Column({
        type: "varchar",
        length: 12,
        nullable:true
    })
    contrato_distrato!: string;

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

    //Chave estrangeira
    @ManyToOne(() => USER, (user) => user.contrato)
    @JoinColumn({
        name: "userUserId"
    })
    user!: USER
    @Column({
        type: "int"
    })
    userUserId!: number

    @ManyToOne(() => Empresa_Contrante, (emp_contratante) => emp_contratante.contrato)
    @JoinColumn({
        name: "empContratanteContratanteId"
    })
    emp_contratante!: Empresa_Contrante
    @Column({
        type: "int"
    })
    empContratanteContratanteId?: number

    @ManyToOne(() => Empresa_PJ, (emp_pj) => emp_pj.contrato)
    emp_pj!: Empresa_PJ

    @ManyToOne(() => Cargo, (cargo) => cargo.contrato)
    @JoinColumn({
        name: "cargoCargoId"
    })
    cargo!: Cargo
    @Column({
        type: "int"
    })
    cargoCargoId?: number
}

@Entity()
export class Empresa_Contrante {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    contratante_id!: number;

    @Column({
        type: "varchar",
        length: 35
    })
    contratante_nome!: string;

    @Column({
        type: "varchar",
        length: 18
    })
    contratante_cnpj!: string;

    // Chave estrangeiras
    @OneToMany(() => Contrato, (contrato) => contrato.emp_contratante)
    contrato!: Contrato

    @OneToMany(() => (Pesquisa_desligamento), (pesq_desligamento) => pesq_desligamento.emp_contratante)
    pesq_desligamento!: Empresa_Contrante

}
@Entity()
export class Empresa_PJ {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    pj_id!: number;

    @Column({
        type: "varchar",
        length: 255
    })
    pj_nome!: string;

    @Column({
        type: "varchar",
        length: 18
    })
    pj_cnjp!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    pj_natureza_juridica!: string;

    @Column({
        type: "date"
    })
    pj_fundacao!: string;

    @Column({
        type: "varchar",
        length: 50
    })
    pj_conduta_etica!: string;

    //Chave estrangeiras
    @OneToMany(() => Contrato, (contrato) => contrato.emp_pj)
    contrato!: Contrato
}

@Entity()
export class Cargo {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    cargo_id!: number;

    @Column({
        type: "varchar",
        nullable: true,
        length: 255
    })
    cargo_head!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    cargo_nivel!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    cargo_area!: string;

    //Chave estrangeira
    @OneToMany(() => Contrato, (contrato) => contrato.cargo)
    contrato!: Contrato

    @ManyToOne(() => Departamento, (departamento) => departamento.cargo)
    @JoinColumn({
        name: "departamentoDepId"
    })
    departamento!: Departamento
    @Column({
        type: "int",
    })
    departamentoDepId!: number
}

@Entity()
export class Departamento {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    dep_id!: number;

    @Column({
        type: "varchar",
        length: 255
    })
    dep_name!: string;

    //Chave Estrangeira
    @OneToMany(() => Cargo, (cargo) => cargo.departamento)
    cargo!: Cargo
}

@Entity()
export class Pesquisa_desligamento {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    pesq_id!: number

    @Column({
        type: "varchar",
        length: 255
    })
    pesq_desligamento!: string

    // Chave estrangeira
    @ManyToOne(() => Empresa_Contrante, (emp_contrato) => emp_contrato.pesq_desligamento)
    @JoinColumn({
        name: "empContratanteContratanteId"
    })
    emp_contratante!: Empresa_Contrante
    @Column({
        type: "int"
    })
    empContratanteContratanteId?: number
}