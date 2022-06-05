import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { docs_curso } from "./curso_docs";
import { modulosCurso } from "./trilha";
import { user } from "./user";

@Entity()
export class moduloConclusao {
    @PrimaryGeneratedColumn({ type: "int" })
    id!: number;

    @Column({
        type: "boolean",
        default: false
    })
    concluiu!: Boolean;

    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.concluiuModulo)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number

    @ManyToOne(() => modulosCurso, (modulo) => modulo.concluiu)
    @JoinColumn({
        name: "moduloModuloId"
    })
    docs!: modulosCurso
    @Column({
        type: "int"
    })
    moduloModuloId?: number
}