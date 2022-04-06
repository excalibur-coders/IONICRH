import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne
} from "typeorm";

import { USER } from "./user";

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
    contrato_Tempo_De_Casa!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    contrato_termos!: string;

    @Column({
        type: "date",
    })
    contrato_tempo_formalizacao!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    contrato_dominio!: string;

    @Column({
        type: "date",
    })
    contrato_data_desligamento!: string;

    @Column({
        type: "date",
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
    contrato_Vale_Transporte!: number;

    @Column({
        type: "float",
        nullable: true
    })
    contrato_Vale_Refeicao!: number;

    @Column({
        type: "float",
        nullable: true
    })
    contrato_Vale_Alimentacao!: number;

    @Column({
        type: "float",
        nullable: true
    })
    contrato_Auxilio_Creche!: number;

    //Chave estrangeira
    @ManyToOne(() => USER, (user) => user.contrato)
    user!: USER
    @ManyToOne(() => Empresa_Contrante, (emp_contratante) => emp_contratante.contrato)
    emp_contratante!: Empresa_Contrante
    @ManyToOne(() => Empresa_PJ, (emp_pj) => emp_pj.contrato)
    emp_pj!: Empresa_Contrante
    @ManyToOne(() => Cargo, (cargo) => cargo.contrato)
    cargo!: Cargo
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

    @OneToMany(() => Contrato, (contrato) => contrato.emp_contratante)
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

    @OneToMany(() => Contrato, (contrato) => contrato.cargo)
    contrato!: Contrato
    @ManyToOne(() => Departamento, (departamento) => departamento.cargo)
    departamento!:Departamento
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
