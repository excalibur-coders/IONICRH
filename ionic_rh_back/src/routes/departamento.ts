import express from "express";

import { 
  createDepartamento, 
  deleteDepartamento, 
  getAllDepartamentos, 
  getDepartamentoById, 
  updateDepartamento,
  getDepFilter,
} from "controllers/Departamento";
import { auth } from "middlewares/auth";
import { testeDoMilenio, testeDoSecundenio } from "controllers/User";

const router = express.Router();

/* router.use(auth) */
router.use(auth)
router.get('/departamentos', getAllDepartamentos);
router.get('/departamentos-filtro/:id', getDepFilter )
router.get('/departamentos/:id', getDepartamentoById);
router.post('/criar-departamento', createDepartamento);
router.put('/alterar/:id', updateDepartamento);
router.delete('/deletar-departamento/:id', deleteDepartamento)
router.post('/teste/:id', testeDoMilenio)
router.post('/teste2/:id', testeDoSecundenio)
export default router;
