import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { docs_curso } from "./curso_docs";
import { user } from "./user";

@Entity()
export class videoConclusao {
    @PrimaryGeneratedColumn({ type: "int" })
    id!: number;

    @Column({
        type: "boolean",
        default: false
    })
    concluiu!: Boolean;

    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.concluiu)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number

    @ManyToOne(() => docs_curso, (docs) => docs.concluiu)
    @JoinColumn({
        name: "videoVideoId"
    })
    docs!: user
    @Column({
        type: "int"
    })
    videoVideoId?: number
}