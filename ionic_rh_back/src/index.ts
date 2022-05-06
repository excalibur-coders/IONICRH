import express from "express";
import cors from "cors";
import "config/dotenv"
import { AppDataSource } from "./config/database";
import * as bcrypt from 'bcrypt'
import departamentoRoutes from "./routes/departamento";
import userRoutes from './routes/user';
import cargoRoutes from './routes/cargo'
import empresaRoutes from './routes/empresa_contratante'
import { empresa_contratante } from "models/emp_contratante";
import { departamento } from "models/departamento";
import { user } from "models/user";
import { cargo } from "models/cargo";
import { contrato } from "models/contrato";
// import authRoutes from './routes/auth';

const app = express();


try {
  AppDataSource.initialize().then(async () => {
    console.log('Banco conectado com sucesso');
    const userRepository = AppDataSource.getRepository(user)
    const depRepository = AppDataSource.getRepository(departamento)
    const empcontRepository = AppDataSource.getRepository(empresa_contratante)
    const cargoRepository = AppDataSource.getRepository(cargo)
    const contRepository = AppDataSource.getRepository(contrato)
    let Administrador = await userRepository.findOne({
      where: {
        user_nome: "Administrador"
      }
    })
    if (!Administrador) {
      const passwordHash = await bcrypt.hash("IonicRH", 8)

      await depRepository
        .createQueryBuilder()
        .insert()
        .into(departamento)
        .values([
          { dep_name: "RH" },
          { dep_name: "T.I" },
          { dep_name: "Marketing" },
          { dep_name: "Projetos & Delivers" },
          { dep_name: "Administração" }
        ])
        .execute()


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

      await cargoRepository
        .createQueryBuilder()
        .insert()
        .into(cargo)
        .values([
          {
            cargo_area: "Recursos Humanos",
            cargo_nivel: "Júnior",
            departamentoDepId: 1,
          },
          {
            cargo_area: "Operações de infraestrutura de TI",
            cargo_nivel: "Pleno",
            departamentoDepId: 2,
          },
          {
            cargo_area: "Marketing Instintucional",
            cargo_nivel: "Sênior",
            departamentoDepId: 3
          },
          {
            cargo_area: "Lider de Projeto delivers RJ",
            cargo_nivel: "Pleno",
            departamentoDepId: 4
          },
          {
            cargo_area: "Administrativo & Financeiro",
            cargo_nivel: "Sênior",
            departamentoDepId: 5
          },
        ])
        .execute()
      await userRepository
        .createQueryBuilder()
        .insert()
        .into(user)
        .values({
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
        })
        .execute()

      await contRepository
        .createQueryBuilder()
        .insert()
        .into(contrato)
        .values({
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
          cargoCargoId: 4,
          empContratanteContratanteId: 2,
        })
        .execute()

      cargoRepository
        .createQueryBuilder()
        .update(cargo)
        .set({
          "headID": 1
        })
        .where(
          "cargo_id = :cargo_id", {
            cargo_id: 1
        }
        )
        .execute()
    }
  });
} catch (error) {
  console.log(`Connection error ${error}`);
}

app.use(cors());
app.use(express.json());
app.use('/departamentos', departamentoRoutes);
app.use('/user', userRoutes);
app.use('/cargo', cargoRoutes);
app.use('/empresa', empresaRoutes);
// app.use('/auth', authRoutes);


app.listen(5000, () => console.log('Serve conectado'))
