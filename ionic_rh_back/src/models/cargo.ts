import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { contrato } from "./contrato";
import { departamento } from "./departamento";

@Entity()
export class cargo {
    @PrimaryGeneratedColumn({ type: "int" })
    cargo_id!: number;
    @Column({
        type: "int",
    })
    cargo_valor!: number;

    @Column({
        type: "varchar",
    })
    cargo_area!: string;

    @OneToMany(() => contrato, (contrato) => contrato.cargo)
    contrato!: contrato

    @ManyToOne(() => contrato, (cargoID) => cargoID.cargoHead)
    @JoinColumn({
        name: "headID"
    })
    cargoID?: cargo
    @Column({
        type:"int",
        nullable: true
    })
    headID?: number

    @ManyToOne(() => departamento, (departamento) => departamento.cargo)
    @JoinColumn({
        name: "departamentoDepId"
    })
    departamento!: departamento
    @Column({
        type: "int",
    })
    departamentoDepId!: number
}