import "reflect-metadata";
import '../config/dotenv';

import { DataSource } from "typeorm";

import { Acesso } from "models/acesso_sistema";
import { Cargo, Contrato, Departamento, Empresa_Contrante, Empresa_PJ } from "models/empresa";
import { USER } from "models/user";
import { Documentos, Endereco, Escolaridade, Idiomas, Telefone } from "models/user_details";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [
    USER, 
    Acesso, 
    Escolaridade, 
    Idiomas, 
    Documentos, 
    Telefone, 
    Endereco, 
    Contrato, 
    Empresa_Contrante, 
    Empresa_PJ, 
    Cargo,
    Departamento
  ],
  migrations: [],
  subscribers: []
})
