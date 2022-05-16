import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { cargo } from "./cargo";

@Entity()
export class departamento {
    @PrimaryGeneratedColumn({ type: "int" })
    dep_id!: number;

    @Column({
        type: "varchar",
    })
    dep_name!: string;

    //Chave Estrangeira
    @OneToMany(() => cargo, (cargo) => cargo.departamento)
    cargo!: cargo
}
