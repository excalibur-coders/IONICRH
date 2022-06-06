import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany, JoinTable
} from "typeorm";
import { contrato } from "./contrato";
import { documentosAvatar } from "./docsAvatar";
import { dependente } from "./userDependente";
import { documentos } from "./user_docs";
import { endereco } from "./user_endereco";
import { escolaridade } from "./user_escola";
import { idiomas } from "./user_idioma";
import { trilha } from "./trilha";
import { telefone } from "./user_telefone";
import { empresa_PJ } from "./emp_pj";
import { pesquisadesligamento } from "./pesquisa_desligamento";
import { videoConclusao } from "./video";
import { moduloConclusao } from "./modulos";



export type Acesso_Sistema = "Administrador" | "Colaborador" | "Gestor" | "Consultor";

@Entity()
export class user {
    @PrimaryGeneratedColumn({ type: "int" })
    user_id!: number

    @Column({
        type: "varchar",
        nullable: true,
    })
    user_nome?: string

    @Column({
        type: "varchar",
        unique: true,
        nullable: true,
    })
    user_cpf?: string

    @Column({
        type: "varchar",
        unique: true,
    })
    user_email?: string

    @Column({
        type: "varchar",
        nullable: true,
    })
    user_nacionalidade?: string

    @Column({
        type: "varchar",
        nullable: true,
    })
    user_naturalidade?: string

    @Column({
        type: "varchar",
        nullable: true,
    })
    user_nascimento?: string

    @Column({
        type: "varchar",
        nullable: true,
    })
    user_genero?: string

    @Column({
        type: "varchar",
        nullable: true,
    })
    user_raca?: string

    @Column({
        type: "varchar",
        nullable: true,
    })
    user_estado_civil?: string

    @Column({
        type: "varchar",
        nullable: true,
        unique: true
    })
    user_rg?: string

    @Column({
        type: "varchar",
        nullable: true,
        unique: true
    })
    user_cnpj?: string
    @Column({
        type: "boolean",
        nullable: true,
        default: false
    })
    user_verificado?: Boolean

    @Column({
        type: "varchar",
    })
    password?: string

    @Column({
        type: "set",
        enum: ["Administrador", "Colaborador", "Consultor", "Gestor"],
        default: "Colaborador"
    })
    user_role!: Acesso_Sistema[];

    // Chave Estrangeira
    // Auto relacionamento
    @ManyToOne(type => user, (user) => user.id_)
    id_!: user

    @OneToMany(type => user, (user_one => user_one.user_reference_id))
    user_reference_id!: user[]

    @OneToMany(() => escolaridade, (escolaridade) => escolaridade.user)
    escolaridade!: escolaridade

    @OneToMany(() => dependente, (dependente) => dependente.user)
    dependente!: dependente

    @OneToMany(() => documentos, (docs) => docs.user)
    docs!: documentos

    @OneToMany(() => pesquisadesligamento, (desligamento) => desligamento.user)
    desligamento!: documentos
    
    @OneToMany(() => documentosAvatar, (docsavatar) => docsavatar.user)
    docsavatar!: documentosAvatar

    @OneToMany(() => idiomas, (idioma) => idioma.user)
    idioma!: idiomas

    @OneToMany(() => telefone, (telefone) => telefone.user)
    telefone!: telefone

    @OneToMany(() => endereco, (endereco) => endereco.user)
    endereco!: endereco

    @OneToMany(() => contrato, (contrato) => contrato.user)
    contrato!: contrato

    /* @OneToMany(() => trilha, (trilha) => trilha.user)
    trilhas!: trilha */

    @OneToMany(() => videoConclusao, (concluiu) => concluiu.user)
    concluiu!: videoConclusao

    @OneToMany(() => moduloConclusao, (concluiuModulo) => concluiuModulo.user)
    concluiuModulo!: moduloConclusao

    @ManyToMany(() => trilha, (trilha) => trilha.junto)
    junto!: trilha

    @OneToMany(() => empresa_PJ, (emp_pj) => emp_pj.user)
    emp_pj!: empresa_PJ
}
