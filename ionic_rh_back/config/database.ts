import "reflect-metadata";
import { DataSource } from "typeorm";
import { Acesso } from "../models/acesso_sistema";
import { Cargo, Contrato, Departamento, Empresa_Contrante, Empresa_PJ } from "../models/empresa";
import { USER } from "../models/user";
import { Documentos, Endereco, Escolaridade, Idiomas, Telefone } from "../models/user_details";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "lucas",
  password: "lucas",
  database: "Fatec_Ionic",
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
