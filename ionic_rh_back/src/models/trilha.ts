import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { user } from "./user";
import { docs_curso } from './curso_docs'
import { moduloConclusao } from "./modulos";

@Entity()
export class trilha {
    @PrimaryGeneratedColumn({ type: "int" })
    trilha_id!: number;
    @Column({
        type: "varchar"
    })
    trilha_nome!: string;
    @ManyToOne(() => user, (user) => user.trilhas)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number

    @ManyToMany(() => user, (user) => user.junto)
    @JoinTable()
    junto!: Promise<user[]>

    @ManyToMany(() => curso, (curso) => curso.juntos)
    @JoinTable()
    /* juntos!: Promise<curso[]> */
    juntos!: curso[]
}
@Entity()
export class modulosCurso {
    @PrimaryGeneratedColumn({ type: "int" })
    modulo_id!: number;
    @Column({
        type: "varchar"
    })
    modulo_nome!: string;
    @OneToMany(() => docs_curso, (docs_curso) => docs_curso.docs)
    docs_curso!: docs_curso
    //
    @ManyToOne(() => curso, (curso) => curso.modulosCurso)
    @JoinTable({
        name: "cursoCursoId"
    })
    curso!: curso
    @Column({
        type: "int"
    })
    cursoCursoId!: number

    @OneToMany(() => moduloConclusao, (concluiu) => concluiu.docs)
    concluiu!: moduloConclusao
}
@Entity()
export class curso {
    @PrimaryGeneratedColumn({ type: "int" })
    curso_id!: number;
    @Column({
        type: "varchar"
    })
    curso_nome!: string;
    @Column({
        type: "longtext",
    })
    curso_descricao!: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    curso_criacao!: Date;
    @Column({ type: 'time', default: 0 })
    curso_duracao!: Date;
    @ManyToMany(() => trilha, (trilha) => trilha.juntos)
    juntos!: trilha

    @OneToMany(() => modulosCurso, (modulosCurso) => modulosCurso.curso)
    modulosCurso!: modulosCurso
}