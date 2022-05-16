import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class idiomas {
    @PrimaryGeneratedColumn({ type: "int" })
    idioma_id!: number;

    @Column({
        type: "varchar"
    })
    idioma_falados!: string;

    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.idioma)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number
}