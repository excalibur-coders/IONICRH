import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { empresacontratante } from "./emp_contratante"

@Entity()
export class pesquisadesligamento {
    @PrimaryGeneratedColumn({ type: "int" })
    pesq_id!: number

    @Column({
        type: "varchar",
    })
    pesq_desligamento!: string

    // Chave estrangeira
    @ManyToOne(() => empresacontratante, (emp_contrato) => emp_contrato.pesq_desligamento)
    @JoinColumn({
        name: "empContratanteContratanteId"
    })
    emp_contratante!: empresacontratante
    @Column({
        type: "int"
    })
    empContratanteContratanteId?: number
}