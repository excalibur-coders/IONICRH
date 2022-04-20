import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class escolaridade {
    @PrimaryGeneratedColumn({ type: "int" })
    school_id!: number;

    @Column({
        type: "varchar",
    })
    school_formacao!: string;

    @Column({
        type: "varchar",
    })
    school_curso!: string;

    @Column({
        type: "varchar",
    })
    school_status!: string;

    @Column({
        type: "varchar",
    })
    school_instituicao!: string;

    @Column({
        type: "varchar",
    })
    school_inicio!: string;

    @Column({
        type: "varchar",
    })
    school_termino!: string;

    //Chave estrangeira
    @ManyToOne(() => user, (user) => user.escolaridade)
    @JoinColumn({
        name: "userUserId"
    })
    user!: user
    @Column({
        type: "int"
    })
    userUserId?: number
}

