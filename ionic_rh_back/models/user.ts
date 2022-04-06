import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne
} from "typeorm";
import { Acesso } from "./acesso_sistema"
import { Contrato } from "./empresa";
import { Documentos, Endereco, Escolaridade, Idiomas, Telefone } from "./user_details";
@Entity()
export class USER {
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
        type: "date",
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
    
    // Chave Estrangeira
    // Auto relacionamento
    @ManyToOne(type => USER, (user) => user.user_manyone)
    user_manyone!: USER
    @OneToMany(type => USER, (user_one => user_one.user_reference_id))
    user_reference_id!: USER[]
    // One - Many [ Escolaridade, Documento, Telefone, Contrato]
    @OneToMany(() => Escolaridade, (escolaridade) => escolaridade.user)
    escolaridade!: Escolaridade
    @OneToMany(() => Documentos, (docs) => docs.user)
    docs!: Documentos
    @OneToMany(() => Idiomas, (idioma) => idioma.user)
    idioma!: Idiomas
    @OneToMany(() => Telefone, (telefone) => telefone.user)
    telefone!: Telefone
    // Many - One [ Endereco, Acesso ]
    @ManyToOne(() => Acesso, (acesso_cargo) => acesso_cargo.user)
    acesso_cargo!: Acesso
    @OneToMany(() => Endereco, (endereco) => endereco.user)
    endereco!: Endereco
    @OneToMany(() => Contrato, (contrato) => contrato.user)
    contrato!: Contrato
}
