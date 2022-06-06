import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { empresacontratante } from "./emp_contratante"
import { user } from "./user"

@Entity()
export class pesquisadesligamento {
    @PrimaryGeneratedColumn({ type: "int" })
    pesq_id!: number

    @Column({
        type: "varchar",
    })
    pesq_desligamento!: string

    @Column({
        type: "boolean",
    })
    pesq_userDesligado!: Boolean

    // Chave estrangeira
    @ManyToOne(() => user, (user) => user.desligamento)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number
}