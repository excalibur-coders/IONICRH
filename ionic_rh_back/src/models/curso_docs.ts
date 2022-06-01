import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { curso } from "./trilha";

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
    @ManyToOne(() => curso, (curso) => curso.docs_curso)
    @JoinColumn({
        name: "docsDocsId"
    })
    docs!: curso
    @Column({
        type: "int"
    })
    docsDocsId?: number
}