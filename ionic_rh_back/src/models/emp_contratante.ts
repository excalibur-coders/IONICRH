import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { contrato } from "./contrato";
import { pesquisadesligamento } from "./pesquisa_desligamento";

@Entity()
export class empresacontratante {
    @PrimaryGeneratedColumn({ type: "int" })
    contratante_id!: number;

    @Column({
        type: "varchar",
    })
    contratante_nome!: string;

    @Column({
        type: "varchar",
    })
    contratante_cnpj!: string;

    // Chave estrangeiras
    @OneToMany(() => contrato, (contrato) => contrato.emp_contratante)
    contrato!: contrato

    @OneToMany(() => (pesquisadesligamento), (pesq_desligamento) => pesq_desligamento.emp_contratante)
    pesq_desligamento!: pesquisadesligamento

}