import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { empresa_contratante } from "./emp_contratante"

@Entity()
export class pesquisa_desligamento {
    @PrimaryGeneratedColumn({ type: "int" })
    pesq_id!: number

    @Column({
        type: "varchar",
    })
    pesq_desligamento!: string

    // Chave estrangeira
    @ManyToOne(() => empresa_contratante, (emp_contrato) => emp_contrato.pesq_desligamento)
    @JoinColumn({
        name: "empContratanteContratanteId"
    })
    emp_contratante!: empresa_contratante
    @Column({
        type: "int"
    })
    empContratanteContratanteId?: number
}