import { AppDataSource } from "config/database"
import * as bcrypt from 'bcrypt'
import { cargo } from "models/cargo"
import { contrato } from "models/contrato"
import { departamento } from "models/departamento"
import { empresacontratante } from "models/emp_contratante"
import { user } from "models/user"
import { idiomas } from "models/user_idioma"
import { escolaridade } from "models/user_escola"
import { telefone } from "models/user_telefone"
import { documentos } from "models/user_docs"
import { documentosAvatar } from "models/docsAvatar"
import { endereco } from "models/user_endereco"
import { trilha, curso } from "models/trilha"

const userRepository = AppDataSource.getRepository(user)
const depRepository = AppDataSource.getRepository(departamento)
const empcontRepository = AppDataSource.getRepository(empresacontratante)
const cargoRepository = AppDataSource.getRepository(cargo)
const contRepository = AppDataSource.getRepository(contrato)
const idiomaRepository = AppDataSource.getRepository(idiomas)
const escolaridadeRepository = AppDataSource.getRepository(escolaridade)
const telefoneRepository = AppDataSource.getRepository(telefone)
const docsFiles = AppDataSource.getRepository(documentos)
const enderecoRepository = AppDataSource.getRepository(endereco)
const docsAvatar = AppDataSource.getRepository(documentosAvatar)
const cursosRepository = AppDataSource.getRepository(curso)
const trilhaRepository = AppDataSource.getRepository(trilha)

export const generate = async () => {
    try {
        console.log("Dados gerado com sucesso");
        await cursosRepository
            .createQueryBuilder()
            .insert()
            .into(curso)
            .values([
                {
                    curso_descricao: "",
                    curso_nome: "Marketing Digital",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Redes Sociais",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "E-commerce",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Consultoria",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Branding e Marketing Digital",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Gestão do tempo",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Employer Branding",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Processos Gerenciais",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Administração de Cargos e Salários",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Excel Intermediário",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Introdução ao Clean Code",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Aprendendo GIT",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "O que é Test-Driven Development (TDD)",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Introdução do NodeJS",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Introdução ao Low Code",
                    curso_duracao: "",
                },
                //Obrigatorios
                {
                    curso_descricao: "",
                    curso_nome: "RDC - 16",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Metodologia ágil",
                    curso_duracao: "",
                }, {
                    curso_descricao: "",
                    curso_nome: "Integração",
                    curso_duracao: "",
                },
            ])
            .execute()
        // Empresas [Certo]
        await empcontRepository
            .createQueryBuilder()
            .insert()
            .into(empresacontratante)
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
        // Departamento [Certo]
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
                { cargo_area: "Marketing Institucional", departamentoDepId: 1, cargo_valor: 2, cargo_id: 1 },
                { cargo_area: "Institutional Analyst", departamentoDepId: 1, cargo_valor: 2, cargo_id: 2 },
                { cargo_area: "IT Infrastructure Ops", departamentoDepId: 2, cargo_valor: 2, cargo_id: 3 },
                { cargo_area: "Technical Leader", departamentoDepId: 2, cargo_valor: 2, cargo_id: 4 },
                { cargo_area: "Software Architect", departamentoDepId: 2, cargo_valor: 2, cargo_id: 5 },
                { cargo_area: "IT Technician", departamentoDepId: 2, cargo_valor: 2, cargo_id: 6 },
                { cargo_area: "Support Analyst", departamentoDepId: 2, cargo_valor: 2, cargo_id: 7 },
                { cargo_area: "Administrative & Financial", departamentoDepId: 3, cargo_valor: 2, cargo_id: 8 },
                { cargo_area: "Financial Analyst", departamentoDepId: 3, cargo_valor: 2, cargo_id: 9 },
                { cargo_area: "Financial Administrative Assistant", departamentoDepId: 3, cargo_valor: 2, cargo_id: 10 },
                { cargo_area: "People & Education", departamentoDepId: 4, cargo_valor: 2, cargo_id: 11 },
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
                user_verificado: 1
            },
            {
                user_nome: "Gabriel Souza Bicho Nunes",
                user_email: "gabriel@gmail.com",
                user_cpf: "813.555.651-97",
                user_rg: "43.173.335-1",
                user_nacionalidade: "Brasil",
                user_naturalidade: "Pidamonhagaba",
                user_nascimento: "27/04/1995",
                user_estado_civil: "Solteiro",
                user_genero: "Feminino",
                user_raca: "Indigena",
                user_role: ["Colaborador"],
                password: passwordHash,
                user_verificado: 1
            },
            {
                user_nome: "Matheus Fiora Avante",
                user_email: "Mathues@gmail.com",
                user_cpf: "128.833.488-55",
                user_rg: "26.893.403-4",
                user_nacionalidade: "Brasil",
                user_naturalidade: "São José dos Campos",
                user_nascimento: "07/10/1999",
                user_estado_civil: "Solteiro",
                user_genero: "Masculino",
                user_raca: "Indigena",
                user_role: ["Gestor"],
                password: passwordHash,
                user_verificado: 1
            },
            {
                user_nome: "Murilo Fattore",
                user_email: "Fattore@gmail.com",
                user_cpf: "258.661.220-57",
                user_rg: "46.038.654-2",
                user_nacionalidade: "Brasil",
                user_naturalidade: "São José dos Campos",
                user_nascimento: "07/11/2000",
                user_estado_civil: "Solteiro",
                user_genero: "Masculino",
                user_raca: "Branco",
                user_role: ["Consultor"],
                password: passwordHash,
                user_verificado: 1
            },
            {
                user_nome: "Lucas Costa",
                user_email: "Costa@gmail.com",
                user_cpf: "066.122.822-31",
                user_rg: "33.439.509-4",
                user_nacionalidade: "Brasil",
                user_naturalidade: "São José dos Campos",
                user_nascimento: "21/04/2001",
                user_estado_civil: "Solteiro",
                user_genero: "MNasculino",
                user_raca: "Branco",
                user_role: ["Consultor"],
                password: passwordHash,
                user_verificado: 1
            },
            {
                user_nome: "Gabriela Silva",
                user_email: "Gabs@gmail.com",
                user_cpf: "663.753.877-95",
                user_rg: "20.318.280-7",
                user_nacionalidade: "Brasil",
                user_naturalidade: "São José dos Campos",
                user_nascimento: "21/04/2001",
                user_estado_civil: "Solteira",
                user_genero: "Feminino",
                user_raca: "Pardo",
                user_role: ["Colaborador"],
                password: passwordHash,
                user_verificado: 1
            },
            ])
            .execute()
        await contRepository
            .createQueryBuilder()
            .insert()
            .into(contrato)
            .values([{
                contrato_matricula: "156412 21 55 2022 1 21231 001 5652360 63",
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
                cargoCargoId: 14,
                empContratanteContratanteId: 3,
                contrato_nivel: "sênior"
            },
            {
                contrato_matricula: "156412 21 55 2022 1 21231 002 5652361 61",
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
                contrato_nivel: "pleno"
            },
            {
                contrato_matricula: "156412 21 55 2022 1 21231 003 5652363 99",
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
                contrato_nivel: "pleno"
            },
            {
                contrato_matricula: "156412 21 55 2022 1 21231 004 5652364 97",
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
                contrato_nivel: "pleno"
            },
            {
                contrato_matricula: "156412 21 55 2022 1 21231 005 5652365 95",
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
                contrato_nivel: "pleno"
            },
            {
                contrato_matricula: "156412 21 55 2022 1 21231 006 5652366 93",
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
                contrato_nivel: "júnior"
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
        cargoRepository
            .createQueryBuilder()
            .update(cargo)
            .set({
                "headID": 2
            })
            .where(
                "cargo_id = :cargo_id", {
                cargo_id: 1
            }
            )
            .execute()
        cargoRepository
            .createQueryBuilder()
            .update(cargo)
            .set({
                "headID": 6
            })
            .where(
                "cargo_id = :cargo_id", {
                cargo_id: 3
            }
            )
            .execute()
        cargoRepository
            .createQueryBuilder()
            .update(cargo)
            .set({
                "headID": 4
            })
            .where(
                "cargo_id = :cargo_id", {
                cargo_id: 8
            }
            )
            .execute()
        cargoRepository
            .createQueryBuilder()
            .update(cargo)
            .set({
                "headID": 5
            })
            .where(
                "cargo_id = :cargo_id", {
                cargo_id: 11
            }
            )
            .execute()
        idiomaRepository
            .createQueryBuilder()
            .insert()
            .into(idiomas)
            .values([{
                idioma_falados: "Português",
                userUserId: 1,
            }, {
                idioma_falados: "Português",
                userUserId: 2,
            }, {
                idioma_falados: "Português",
                userUserId: 3,
            }, {
                idioma_falados: "Português",
                userUserId: 4,
            }, {
                idioma_falados: "Português",
                userUserId: 5,
            }, {
                idioma_falados: "Português",
                userUserId: 6,
            },])
            .execute()
        escolaridadeRepository
            .createQueryBuilder()
            .insert()
            .into(escolaridade)
            .values([{
                school_formacao: "Ensino Superior",
                school_curso: "Desenvolvimento de Software Multiplataforma",
                school_status: "Completo",
                school_instituicao: "Fatec São José dos Campos",
                school_inicio: "27/02/2015",
                school_termino: "31/12/2018",
                userUserId: 1
            },
            {
                school_formacao: "Ensino Superior",
                school_curso: "Ciencias da computação",
                school_status: "Andamento",
                school_instituicao: "UNIP - Universidade Paulista",
                school_inicio: "27/02/2018",
                school_termino: "31/12/2023",
                userUserId: 2
            },
            {
                school_formacao: "Ensino Superior",
                school_curso: "Banco de dados",
                school_status: "Completo",
                school_instituicao: "Fatec São José dos Campos",
                school_inicio: "27/02/2015",
                school_termino: "31/12/2018",
                userUserId: 3
            },
            {
                school_formacao: "Ensino Superior",
                school_curso: "Desenvolvimento de Software Multiplataforma",
                school_status: "Andamento",
                school_instituicao: "Fatec São José dos Campos",
                school_inicio: "27/02/2021",
                school_termino: "31/12/2024",
                userUserId: 4
            },
            {
                school_formacao: "Ensino Superior",
                school_curso: "Desenvolvimento de Software Multiplataforma",
                school_status: "Andamento",
                school_instituicao: "Fatec São José dos Campos",
                school_inicio: "27/02/2021",
                school_termino: "31/12/2024",
                userUserId: 5
            }
                ,
            {
                school_formacao: "Ensino Superior",
                school_curso: "Desenvolvimento de Software Multiplataforma",
                school_status: "Andamento",
                school_instituicao: "Fatec São José dos Campos",
                school_inicio: "27/02/2021",
                school_termino: "31/12/2024",
                userUserId: 6
            }])
            .execute()
        telefoneRepository
            .createQueryBuilder()
            .insert()
            .into(telefone)
            .values([{
                tell_ddd: "12",
                tell_numero: "991721721",
                userUserId: 1
            },
            {
                tell_ddd: "12",
                tell_numero: "991721722",
                userUserId: 2
            },
            {
                tell_ddd: "12",
                tell_numero: "991721723",
                userUserId: 3
            },
            {
                tell_ddd: "12",
                tell_numero: "991721724",
                userUserId: 4
            },
            {
                tell_ddd: "12",
                tell_numero: "991721725",
                userUserId: 5
            },
            {
                tell_ddd: "12",
                tell_numero: "991721726",
                userUserId: 6
            }])
            .execute()
        docsAvatar
            .createQueryBuilder()
            .insert()
            .into(documentosAvatar)
            .values([{
                avatar_id: 1,
                avatar_nome: 'logoExcalibur',
                avatar_url: 'https://bichocorporacoes.s3.us-east-1.amazonaws.com/cfbe20f5a899727cf8ceafacc69da1de-logoExcalibur.png',
                avatar_size: 5242880,
                avatar_type: '.png',
                userUserId: 1
            },
            {
                avatar_id: 2,
                avatar_nome: 'logoExcalibur',
                avatar_url: 'https://bichocorporacoes.s3.us-east-1.amazonaws.com/cfbe20f5a899727cf8ceafacc69da1de-logoExcalibur.png',
                avatar_size: 5242880,
                avatar_type: '.png',
                userUserId: 2
            },
            {
                avatar_id: 3,
                avatar_nome: 'logoExcalibur',
                avatar_url: 'https://bichocorporacoes.s3.us-east-1.amazonaws.com/cfbe20f5a899727cf8ceafacc69da1de-logoExcalibur.png',
                avatar_size: 5242880,
                avatar_type: '.png',
                userUserId: 3
            },
            {
                avatar_id: 4,
                avatar_nome: 'logoExcalibur',
                avatar_url: 'https://bichocorporacoes.s3.us-east-1.amazonaws.com/cfbe20f5a899727cf8ceafacc69da1de-logoExcalibur.png',
                avatar_size: 5242880,
                avatar_type: '.png',
                userUserId: 4
            },
            {
                avatar_id: 5,
                avatar_nome: 'logoExcalibur',
                avatar_url: 'https://bichocorporacoes.s3.us-east-1.amazonaws.com/cfbe20f5a899727cf8ceafacc69da1de-logoExcalibur.png',
                avatar_size: 5242880,
                avatar_type: '.png',
                userUserId: 5
            },
            {
                avatar_id: 6,
                avatar_nome: 'logoExcalibur',
                avatar_url: 'https://bichocorporacoes.s3.us-east-1.amazonaws.com/cfbe20f5a899727cf8ceafacc69da1de-logoExcalibur.png',
                avatar_size: 5242880,
                avatar_type: '.png',
                userUserId: 6
            },])
            .execute()
        await trilhaRepository
            .createQueryBuilder()
            .insert()
            .into(trilha)
            .values([
                { trilha_nome: "Introdução Ionic", userUserId: 1 },
                { trilha_nome: "Trilha de Tecnologia", userUserId: 5 },
                { trilha_nome: "Trilha de Administração", userUserId: 4 },
                { trilha_nome: "Trilha de Marketing", userUserId: 5 },
            ])
            .execute()
        enderecoRepository
            .createQueryBuilder()
            .insert()
            .into(endereco)
            .values([{
                endereco_pais: "Brasil",
                endereco_bairro: "Três corações",
                endereco_cidade: "São José dos campos",
                endereco_cep: "12235-700",
                endereco_compl: "",
                endereco_numero: "396",
                endereco_rua: "Rua três corações",
                endereco_estado: "São Paulo",
                userUserId: 1
            }, {
                endereco_pais: "Brasil",
                endereco_bairro: "Trinta e um de março",
                endereco_cidade: "São José dos campos",
                endereco_cep: "12235-800",
                endereco_compl: "",
                endereco_numero: "290",
                endereco_rua: "Rua maria pero tinoco",
                endereco_estado: "São Paulo",
                userUserId: 2
            }, {
                endereco_pais: "Brasil",
                endereco_bairro: "Vila industrial",
                endereco_cidade: "São José dos campos",
                endereco_cep: "12105-800",
                endereco_compl: "Apto. 250 bloco 3",
                endereco_numero: "290",
                endereco_rua: "Vila",
                endereco_estado: "São Paulo",
                userUserId: 3
            }, {
                endereco_pais: "Brasil",
                endereco_bairro: "jardin das industrias",
                endereco_cidade: "São José dos campos",
                endereco_cep: "12105-800",
                endereco_compl: "Apto. 690 bloco 2",
                endereco_numero: "20",
                endereco_rua: "Vila",
                endereco_estado: "São Paulo",
                userUserId: 4
            },
            {
                endereco_pais: "Brasil",
                endereco_bairro: "Morumbi",
                endereco_cidade: "São José dos campos",
                endereco_cep: "12158-400",
                endereco_compl: "Apto. 250 bloco 3",
                endereco_numero: "290",
                endereco_rua: "Rua Jardim",
                endereco_estado: "São Paulo",
                userUserId: 5
            },
            {
                endereco_pais: "Brasil",
                endereco_bairro: "Residencial União",
                endereco_cidade: "São José dos campos",
                endereco_cep: "13505-800",
                endereco_compl: "",
                endereco_numero: "980",
                endereco_rua: "José das peras",
                endereco_estado: "São Paulo",
                userUserId: 6
            },])
            .execute()
        await AppDataSource
            .createQueryBuilder()
            .insert()
            .into("trilha_juntos_curso")
            .values([
                {
                    cursoCursoId: 1,
                    trilhaTrilhaId: 4
                },
                {
                    cursoCursoId: 2,
                    trilhaTrilhaId: 4
                },
                {
                    cursoCursoId: 3,
                    trilhaTrilhaId: 4
                },
                {
                    cursoCursoId: 4,
                    trilhaTrilhaId: 4
                },
                {
                    cursoCursoId: 5,
                    trilhaTrilhaId: 4
                },
                {
                    cursoCursoId: 6,
                    trilhaTrilhaId: 3
                },
                {
                    cursoCursoId: 7,
                    trilhaTrilhaId: 3
                },
                {
                    cursoCursoId: 8,
                    trilhaTrilhaId: 3
                },
                {
                    cursoCursoId: 9,
                    trilhaTrilhaId: 3
                },
                {
                    cursoCursoId: 10,
                    trilhaTrilhaId: 3
                },
                {
                    cursoCursoId: 11,
                    trilhaTrilhaId: 2
                },
                {
                    cursoCursoId: 12,
                    trilhaTrilhaId: 2
                },
                {
                    cursoCursoId: 13,
                    trilhaTrilhaId: 2
                },
                {
                    cursoCursoId: 14,
                    trilhaTrilhaId: 2
                },
                {
                    cursoCursoId: 15,
                    trilhaTrilhaId: 2
                },
                {
                    cursoCursoId: 16,
                    trilhaTrilhaId: 1
                },
                {
                    cursoCursoId: 17,
                    trilhaTrilhaId: 1
                },
                {
                    cursoCursoId: 18,
                    trilhaTrilhaId: 1
                },
            ])
            .execute()
        await AppDataSource
            .createQueryBuilder()
            .insert()
            .into("trilha_junto_user")
            .values([
                { trilhaTrilhaId: 1, userUserId: 2 },
                { trilhaTrilhaId: 2, userUserId: 2 },
                { trilhaTrilhaId: 1, userUserId: 6 },
                { trilhaTrilhaId: 4, userUserId: 6 },
            ])
            .execute()
    } catch (error) {
        console.log(error);
    }
}
