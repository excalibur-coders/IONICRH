import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany
} from "typeorm";

import { USER } from "./user";

export type Acesso_Sistema = "Administrador" | "Colaborador" | "Gestor" | "Consultor";

@Entity()
export class Acesso {
    @PrimaryGeneratedColumn({
        type: "int",
    })
    acesso_id!: string;

    @Column({
        type: "set",
        enum: ["Administrador", "Colaborador", "Consultor", "Gestor"],
        default: ["Colaborador"]
    })
    acesso_cargo!: Acesso_Sistema[];
    
    // Chave estrangeira
    @OneToMany(() => USER, (user) => user.acesso_cargo)
    user!: USER[]
}
