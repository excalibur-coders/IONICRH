import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToOne, OneToMany, DataSource, JoinColumn
} from "typeorm";

import { USER } from "./user";

@Entity()
export class Escolaridade {
    @PrimaryGeneratedColumn({
        type: "int",
    })
    school_id!: number;

    @Column({
        type: "varchar",
        length: 250
    })
    school_formacao!: string;

    @Column({
        type: "char",
        length: 9
    })
    school_status!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    school_instituicao!: string;

    @Column({
        type: "varchar",
        length: 11
    })
    school_inicio!: DataSource;

    @Column({
        type: "varchar",
        length: 11
    })
    school_termino!: DataSource;

    //Chave estrangeira
    @ManyToOne(() => USER, (user) => user.escolaridade)
    @JoinColumn({
        name: "userUserId"
    })
    user!: USER
    @Column({
        type: "int"
    })
    userUserId?: number
}

@Entity()
export class Idiomas {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    idioma_id!: number;

    @Column({
        type: "varchar",
        length: 150
    })
    idioma_falados!: string;

    //Chave estrangeira
    @ManyToOne(() => USER, (user) => user.idioma)
    @JoinColumn({
        name: "userUserId"
    })
    user!: USER
    @Column({
        type: "int"
    })
    userUserId?: number
}

@Entity()
export class Documentos {
    @PrimaryGeneratedColumn({
        type: "int",
    })
    docs_id!: number;

    @Column({
        type: "varchar",
        length: 255
    })
    docs_path!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    docs_type!: string;

    //Chave estrangeira
    @ManyToOne(() => USER, (user) => user.docs)
    _fk__user_!: USER
}

@Entity()
export class Telefone {
    @PrimaryGeneratedColumn({
        type: "int",
    })
    tell_id!: number;

    @Column({
        type: "varchar",
        length: 4
    })
    tell_ddd!: string;

    @Column({
        type: "varchar",
        length: 9
    })
    tell_numero!: string;

    //Chave estrangeira
    @ManyToOne(() => USER, (user) => user.telefone)
    _fk__user_!: USER
}

@Entity()
export class Endereco {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    endereco_id!: number;

    @Column({
        type: "varchar",
        length: 255
    })
    endereco_pais!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    endereco_bairro!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    endereco_cidade!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    endereco_estado!: string;

    @Column({
        type: "varchar",
        length: 255
    })
    endereco_numero!: string;
    // Chave estrangeira
    @ManyToOne(() => USER, (user) => user.endereco)
    _fk__user_!: USER
}
