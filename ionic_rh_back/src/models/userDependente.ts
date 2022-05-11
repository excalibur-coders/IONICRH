import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { contrato } from "./contrato";
import { user } from "./user";

@Entity()
export class dependente {
    @PrimaryGeneratedColumn({type: "int"})
    dependente_id!: number;

    @Column({
        type: "varchar",
        nullable: true
    })
    dependente_nome?: string

    @Column({
        type: "varchar",
        nullable: true
    })
    dependente_nascimento?: string

    @Column( {
        type: "varchar",
        nullable: true
    })
    dependente_origin?: string
    
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