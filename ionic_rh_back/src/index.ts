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
import { generate } from "controllers/generete";
// import authRoutes from './routes/auth';

const app = express();


try {
  AppDataSource.initialize().then(async () => {
    console.log('Banco conectado com sucesso');
    const userRepository = AppDataSource.getRepository(user)
    let Administrador = await userRepository.findOne({
      where: {
        user_nome: "Administrador"
      }
    })
    if (!Administrador) {
      generate()
    };
  })}catch (error) {
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
