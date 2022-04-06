import express from "express";
import cors from "cors";
import { AppDataSource } from "./config/database";
import departamentoRoutes from "./routes/departamento";
import acessoRoutes from './routes/acesso'

const app = express();

try {
  AppDataSource.initialize().then(async () => {
    console.log('Conectado Pora!');
  });
} catch (error) {
  console.log(`Connection error ${error}`);
}

app.use(cors());
app.use(express.json());
app.use('/departamentos', departamentoRoutes)
app.use('/acesso', acessoRoutes)

app.listen(5000, () => console.log('Server rodandooo!'))
