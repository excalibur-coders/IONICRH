import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class telefone {
    @PrimaryGeneratedColumn({ type: "int" })
    tell_id!: number;

    @Column({
        type: "varchar",
    })
    tell_ddd!: string;

    @Column({
        type: "varchar",
    })
    tell_numero!: string;

    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.telefone)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number
    
}