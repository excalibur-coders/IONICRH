import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { user } from "./user";
import { docs_curso } from './curso_docs'

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

    @OneToMany(() => docs_curso, (docs_curso) => docs_curso.docs)
    docs_curso!: docs_curso
}