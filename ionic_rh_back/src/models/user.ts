import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne
} from "typeorm";

import { Contrato } from "./empresa";
import { Documentos, Endereco, escolaridade, Idiomas, Telefone } from "./user_details";

export type Acesso_Sistema = "Administrador" | "Colaborador" | "Gestor" | "Consultor";

@Entity()
export class USER {
    static user_nome(user_nome: any) {
        throw new Error("Method not implemented.");
    }
    static findOne(arg0: { user_email: any; user_type: number; }, arg1: (err: any, user: any) => void) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn({
        type: "int"
    })
    user_id!: number

    @Column({
        type: "varchar",
        length: 300,
        nullable: true,
    })
    user_nome?: string

    @Column({
        type: "char",
        length: 14,
        unique: true,
        nullable: true,
    })
    user_cpf?: string

    @Column({
        type: "varchar",
        length: 350,
        unique: true,
    })
    user_email?: string

    @Column({
        type: "varchar",
        length: 50,
        nullable: true,
    })
    user_nacionalidade?: string

    @Column({
        type: "varchar",
        length: 50,
        nullable: true,
    })
    user_naturalidade?: string

    @Column({
        type: "varchar",
        length: 11,
        nullable: true,
    })
    user_nascimento?: string

    @Column({
        type: "varchar",
        length: 35,
        nullable: true,
    })
    user_genero?: string

    @Column({
        type: "varchar",
        length: 25,
        nullable: true,
    })
    user_raca?: string

    @Column({
        type: "varchar",
        length: 25,
        nullable: true,
    })
    user_estado_civil?: string

    @Column({
        type: "varchar",
        length: 12,
        nullable: true,
        unique:true
    })
    user_rg?: string

    @Column({
        type: "varchar",
        length: 18,
        nullable: true,
        unique: true
    })
    user_cnpj?: string

    @Column({
        type: "varchar",
        length: 255,
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
    @ManyToOne(type => USER, (user) => user.id_)
    id_!: USER

    @OneToMany(type => USER, (user_one => user_one.user_reference_id))
    user_reference_id!: USER[]

    @OneToMany(() => escolaridade, (escolaridade) => escolaridade.user)
    escolaridade!: escolaridade

    @OneToMany(() => Documentos, (docs) => docs._fk__user_)
    docs!: Documentos

    @OneToMany(() => Idiomas, (idioma) => idioma.user)
    idioma!: Idiomas

    @OneToMany(() => Telefone, (telefone) => telefone.user)
    telefone!: Telefone

    @OneToMany(() => Endereco, (endereco) => endereco.user)
    endereco!: Endereco
    
    @OneToMany(() => Contrato, (contrato) => contrato.user)
    contrato!: Contrato
}
