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
        length: 11
    })
    contrato_tempo_de_casa!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    contrato_termos!: string;

    @Column({
        type: "varchar",
        length: 11
    })
    contrato_tempo_formalizacao!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    contrato_dominio!: string;

    @Column({
        type: "varchar",
        length: 11
    })
    contrato_data_desligamento!: string;

    @Column({
        type: "varchar",
        length: 11
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

    //@Column({
    //    type: "set",
    //    enum: ["Pessoa Juridica" ,"CLT" , "Estagio" , "Temporario"],
    //    default: "Temporario"
    //})
    //contrato_type!: Contratacao_type[];
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
    _fk__emp_contratante_!: Empresa_Contrante
    @ManyToOne(() => Empresa_PJ, (emp_pj) => emp_pj.contrato)
    _fk__emp_pj_!: Empresa_Contrante

    @ManyToOne(() => Cargo, (cargo) => cargo.contrato)
    @JoinColumn({
        name: "cargoCargoId"
    })
    cargo!: Cargo
    @Column({
        type:"int"
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

    @Column({
        type: "varchar",
        length: 255
    })
    contratante_pesq_desligamento!: string;

    @OneToMany(() => Contrato, (contrato) => contrato._fk__emp_contratante_)
    contrato!: Contrato
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
    @OneToMany(() => Contrato, (contrato) => contrato._fk__emp_pj_)
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

    @OneToMany(() => Contrato, (contrato) => contrato.cargo)
    contrato!: Contrato
    @ManyToOne(() => Departamento, (departamento) => departamento.cargo)
    @JoinColumn({
        name: "departamentoDepId"
    })
    departamento!:Departamento
    @Column({
        type:"int",
    })
    departamentoDepId!: number
}

@Entity()
export class Departamento{
    @PrimaryGeneratedColumn({
        type:"int"
    })
    dep_id!: number;

    @Column({
        type:"varchar",
        length:255
    })
    dep_name!:string;
    
    @OneToMany(()=> Cargo, (cargo) => cargo.departamento)
    cargo!: Cargo
}