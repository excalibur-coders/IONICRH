import { AppDataSource } from "config/database"
import * as bcrypt from 'bcrypt'
import { cargo } from "models/cargo"
import { contrato } from "models/contrato"
import { departamento } from "models/departamento"
import { empresa_contratante } from "models/emp_contratante"
import { user } from "models/user"

const userRepository = AppDataSource.getRepository(user)
const depRepository = AppDataSource.getRepository(departamento)
const empcontRepository = AppDataSource.getRepository(empresa_contratante)
const cargoRepository = AppDataSource.getRepository(cargo)
const contRepository = AppDataSource.getRepository(contrato)
export const generate = async () => {
    try {
        console.log("Dados gerado com sucesso");
        // Empresas 
        await empcontRepository
            .createQueryBuilder()
            .insert()
            .into(empresa_contratante)
            .values([
                {
                    contratante_nome: "NESS",
                    contratante_cnpj: "72.027.097/0001-37"
                },
                {
                    contratante_nome: "IONIC",
                    contratante_cnpj: "35.594.747/0001-08"
                },
                {
                    contratante_nome: "NESS LAW",
                    contratante_cnpj: "35.524.049/0001-28"
                },
                {
                    contratante_nome: "IARA",
                    contratante_cnpj: "32.528.836/0001-50"
                },
            ])
            .execute()
        // Departamento
        await depRepository
            .createQueryBuilder()
            .insert()
            .into(departamento)
            .values([
                { dep_name: "Marketing Institucional" },
                { dep_name: "IT Infrastructure Ops" },
                { dep_name: "Administrative & Financial" },
                { dep_name: "People & Education" },
                { dep_name: "ADM" }
            ])
            .execute()
        // Cargos
        await cargoRepository
            .createQueryBuilder()
            .insert()
            .into(cargo)
            .values([
                { cargo_area: "Marketing Institucional", departamentoDepId: 1, cargo_valor: 1, cargo_id: 1 },
                { cargo_area: "Institutional Analyst", departamentoDepId: 1, cargo_valor: 2, cargo_id: 2 },
                { cargo_area: "IT Infrastructure Ops", departamentoDepId: 2, cargo_valor: 1, cargo_id: 3 },
                { cargo_area: "Technical Leader", departamentoDepId: 2, cargo_valor: 2, cargo_id: 4 },
                { cargo_area: "Software Architect", departamentoDepId: 2, cargo_valor: 3, cargo_id: 5 },
                { cargo_area: "IT Technician", departamentoDepId: 2, cargo_valor: 4, cargo_id: 6 },
                { cargo_area: "Support Analyst", departamentoDepId: 2, cargo_valor: 5, cargo_id: 7 },
                { cargo_area: "Administrative & Financial", departamentoDepId: 3, cargo_valor: 1, cargo_id: 8 },
                { cargo_area: "Financial Analyst", departamentoDepId: 3, cargo_valor: 2, cargo_id: 9 },
                { cargo_area: "Financial Administrative Assistant", departamentoDepId: 3, cargo_valor: 3, cargo_id: 10 },
                { cargo_area: "People & Education", departamentoDepId: 4, cargo_valor: 1, cargo_id: 11 },
                { cargo_area: "People & Education Analyst", departamentoDepId: 4, cargo_valor: 2, cargo_id: 12 },
                { cargo_area: "Administrative Assistant", departamentoDepId: 4, cargo_valor: 2, cargo_id: 13 },
                { cargo_area: "CEO", departamentoDepId: 5, cargo_valor: 1, cargo_id: 14 }
            ])
            .execute()
        // Usuarios
        const passwordHash = await bcrypt.hash("IonicRH", 8)
        await userRepository
            .createQueryBuilder()
            .insert()
            .into(user)
            .values([{
                user_nome: "Administrador",
                user_email: "Administrador@ExcaliburCoders.com.br",
                user_cpf: "462.428.538-76",
                user_cnpj: "35.594.747/0001-08",
                user_rg: "17.256.439-6",
                user_nacionalidade: "Brasil",
                user_naturalidade: "Pidamonhagaba",
                user_nascimento: "27/04/1995",
                user_estado_civil: "Solteira",
                user_genero: "Outros",
                user_raca: "Indigena",
                user_role: ["Administrador"],
                password: passwordHash,
            },
            {
                user_nome: "Gabriel Souza Bicho Nunes",
                user_email: "gabriel@gmail.com",
                user_cpf: "462.428.538-77",
                user_nacionalidade: "Brasil",
                user_naturalidade: "Pidamonhagaba",
                user_nascimento: "27/04/1995",
                user_estado_civil: "Solteiro",
                user_genero: "Feminino",
                user_raca: "Indigena",
                user_role: ["Colaborador"],
                password: passwordHash,
            },
            {
                user_nome: "Matheus Fiora Avante",
                user_email: "Mathues@gmail.com",
                user_cpf: "462.428.538-78",
                user_nacionalidade: "Brasil",
                user_naturalidade: "São José dos Campos",
                user_nascimento: "07/10/1999",
                user_estado_civil: "Solteiro",
                user_genero: "Masculino",
                user_raca: "Indigena",
                user_role: ["Gestor"],
                password: passwordHash,
            },
            {
                user_nome: "Murilo Fattore",
                user_email: "Fattore@gmail.com",
                user_cpf: "462.428.538-79",
                user_nacionalidade: "Brasil",
                user_naturalidade: "São José dos Campos",
                user_nascimento: "07/11/2000",
                user_estado_civil: "Solteiro",
                user_genero: "Masculino",
                user_raca: "Branco",
                user_role: ["Consultor"],
                password: passwordHash,
            },
            {
                user_nome: "Lucas Costa",
                user_email: "Costa@gmail.com",
                user_cpf: "462.428.538-80",
                user_nacionalidade: "Brasil",
                user_naturalidade: "São José dos Campos",
                user_nascimento: "21/04/2001",
                user_estado_civil: "Solteiro",
                user_genero: "MNasculino",
                user_raca: "Branco",
                user_role: ["Colaborador"],
                password: passwordHash,
            },
            {
                user_nome: "Gabriela Silva",
                user_email: "Gabs@gmail.com",
                user_cpf: "462.428.538-81",
                user_nacionalidade: "Brasil",
                user_naturalidade: "São José dos Campos",
                user_nascimento: "21/04/2001",
                user_estado_civil: "Solteira",
                user_genero: "Feminino",
                user_raca: "Pardo",
                user_role: ["Colaborador"],
                password: passwordHash,
            },
            ])
            .execute()
        await contRepository
            .createQueryBuilder()
            .insert()
            .into(contrato)
            .values([{
                contrato_matricula: "7002-255",
                contrato_adimissao: "01/04/2022",
                contrato_base: "São José dos Campos",
                contrato_tempo_de_casa: "08/04/2022",
                contrato_termos: "Política para Propriedade Intelectual da IONIC - válida a partir de 25/02/2022",
                contrato_dominio: "www.BichoCorporações.com.br",
                contrato_turno: "Noturno",
                contrato_faixa_salarial: 3751.52,
                contrato_plano_saude: 675.25,
                contrato_vale_transporte: 289.27,
                contrato_vale_alimentacao: 577.55,
                contrato_vale_refeicao: 873.99,
                contrato_auxilio_creche: 0.00,
                contrato_distrato: "Não tem",
                contrato_tempo_formalizacao: "Não tem",
                contrato_data_desligamento: "Não tem",
                contrato_tipo: ["CLT"],
                userUserId: 1,
                cargoCargoId: 5,
                empContratanteContratanteId: 3,
            },
            {
                contrato_matricula: "8222-555",
                contrato_adimissao: "05/10/2022",
                contrato_base: "São José dos Campos",
                contrato_tempo_de_casa: "08/11/2022",
                contrato_termos: "Política para Propriedade Intelectual da IONIC - válida a partir de 25/02/2022",
                contrato_turno: "Diurno",
                contrato_faixa_salarial: 3751.52,
                contrato_plano_saude: 675.25,
                contrato_vale_transporte: 289.27,
                contrato_vale_alimentacao: 577.55,
                contrato_vale_refeicao: 873.99,
                contrato_auxilio_creche: 0.00,
                contrato_tipo: ["CLT"],
                userUserId: 2,
                cargoCargoId: 10,
                empContratanteContratanteId: 1,
            },
            {
                contrato_matricula: "8222-515",
                contrato_adimissao: "05/05/2022",
                contrato_base: "Taubate",
                contrato_tempo_de_casa: "08/12/2022",
                contrato_termos: "Política para Propriedade Intelectual da IONIC - válida a partir de 25/02/2022",
                contrato_dominio: "www.BichoCorporações.com.br",
                contrato_turno: "Matutino",
                contrato_faixa_salarial: 3751.52,
                contrato_plano_saude: 675.25,
                contrato_vale_transporte: 289.27,
                contrato_vale_alimentacao: 577.55,
                contrato_vale_refeicao: 873.99,
                contrato_auxilio_creche: 0.00,
                contrato_tipo: ["Temporario"],
                userUserId: 3,
                cargoCargoId: 2,
                empContratanteContratanteId: 4,
            },
            {
                contrato_matricula: "1250-515",
                contrato_adimissao: "27/05/2022",
                contrato_base: "Jacarei",
                contrato_tempo_de_casa: "08/12/2022",
                contrato_termos: "Política para Propriedade Intelectual da IONIC - válida a partir de 25/02/2022",
                contrato_turno: "Noturno",
                contrato_faixa_salarial: 3751.52,
                contrato_plano_saude: 675.25,
                contrato_vale_transporte: 289.27,
                contrato_vale_alimentacao: 577.55,
                contrato_vale_refeicao: 873.99,
                contrato_auxilio_creche: 0.00,
                contrato_tipo: ["Estagio"],
                userUserId: 4,
                cargoCargoId: 6,
                empContratanteContratanteId: 4,
            },
            {
                contrato_matricula: "6960-515",
                contrato_adimissao: "27/05/2022",
                contrato_base: "Jacarei",
                contrato_tempo_de_casa: "08/12/2022",
                contrato_termos: "Política para Propriedade Intelectual da IONIC - válida a partir de 25/02/2022",
                contrato_turno: "Noturno",
                contrato_faixa_salarial: 3751.52,
                contrato_plano_saude: 675.25,
                contrato_vale_transporte: 289.27,
                contrato_vale_alimentacao: 577.55,
                contrato_vale_refeicao: 873.99,
                contrato_auxilio_creche: 0.00,
                contrato_tipo: ["Estagio"],
                userUserId: 5,
                cargoCargoId: 1,
                empContratanteContratanteId: 4,
            },
            {
                contrato_matricula: "1458-515",
                contrato_adimissao: "27/05/2022",
                contrato_base: "Ubatuba",
                contrato_tempo_de_casa: "08/12/2022",
                contrato_termos: "Política para Propriedade Intelectual da IONIC - válida a partir de 25/02/2022",
                contrato_turno: "Noturno",
                contrato_faixa_salarial: 3751.52,
                contrato_plano_saude: 675.25,
                contrato_vale_transporte: 289.27,
                contrato_vale_alimentacao: 577.55,
                contrato_vale_refeicao: 873.99,
                contrato_auxilio_creche: 0.00,
                contrato_tipo: ["Estagio"],
                userUserId: 6,
                cargoCargoId: 7,
                empContratanteContratanteId: 4,
            },
            ])
            .execute()
        cargoRepository
            .createQueryBuilder()
            .update(cargo)
            .set({
                "headID": 1
            })
            .where(
                "cargo_id = :cargo_id", {
                cargo_id: 14
            }
            )
            .execute()
    } catch (error) {
        console.log(error);
    }
}
