import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne
} from "typeorm";

import { Contrato } from "./empresa";
import { Documentos, Endereco, Escolaridade, Idiomas, Telefone } from "./user_details";

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
        length: 50,
        nullable: true,
    })
    user_tipo_contrato?: string

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
        default: ["Colaborador"]
    })
    user_role!: Acesso_Sistema[];

    // Chave Estrangeira
    // Auto relacionamento
    @ManyToOne(type => USER, (user) => user.id_)
    id_!: USER 
    @OneToMany(type => USER, (user_one => user_one.user_reference_id))
    user_reference_id!: USER[]
    // One - Many [ Escolaridade, Documento, Telefone, Contrato]
    @OneToMany(() => Escolaridade, (escolaridade) => escolaridade._fk__user_)
    escolaridade!: Escolaridade
    @OneToMany(() => Documentos, (docs) => docs._fk__user_)
    docs!: Documentos
    @OneToMany(() => Idiomas, (idioma) => idioma._fk__user_)
    idioma!: Idiomas
    @OneToMany(() => Telefone, (telefone) => telefone._fk__user_)
    telefone!: Telefone
    @OneToMany(() => Endereco, (endereco) => endereco._fk__user_)
    endereco!: Endereco
    @OneToMany(() => Contrato, (contrato) => contrato._fk__user_)
    contrato!: Contrato 
    // Many - One [ Endereco, Acesso ]
    // @ManyToOne(() => Acesso, (acesso_cargo) => acesso_cargo.user)
    // _FK__acesso_cargo_!: Acesso 
}
