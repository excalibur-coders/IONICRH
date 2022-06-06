import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { modulosCurso } from "./trilha";
import { videoConclusao } from "./video";

@Entity()
export class docs_curso {
    @PrimaryGeneratedColumn({ type: "int" })
    docs_id!: number;

    @Column({
        type: "varchar",
        nullable: true
    })
    docs_nome!: string;
    @Column({
        type: "longtext",
        nullable: true
    })
    docs_url!: string;
    @Column({
        type: "longtext",
        nullable: true
    })
    docs_key!: string;
    @Column({
        type: "float",
        nullable: true
    })
    docs_size!: number;
    @Column({
        type: "varchar",
        nullable: true
    })
    docs_type!: string;
    @Column({
        type: "varchar",
        nullable: true
    })
    docs_header!: string;



    //Chave estrangeira
    @ManyToOne(() => modulosCurso, (modulosCurso) => modulosCurso.docs_curso)
    @JoinColumn({
        name: "docsDocsId"
    })
    docs!: modulosCurso
    @Column({
        type: "int"
    })
    docsDocsId?: number

    @OneToMany(() => videoConclusao, (concluiu) => concluiu.docs)
    concluiu!: videoConclusao
}