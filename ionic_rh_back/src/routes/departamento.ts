import express from "express";

import { 
  createDepartamento, 
  deleteDepartamento, 
  getAllDepartamentos, 
  getDepartamentoById, 
  updateDepartamento,
  getDepFilter 
} from "controllers/Departamento";
import { auth } from "middlewares/auth";

const router = express.Router();

/* router.use(auth) */
router.get('/departamentos', getAllDepartamentos);
router.get('/departamentos-filtro/:id', getDepFilter )
router.get('/departamentos/:id', getDepartamentoById);
router.post('/criar-departamento', createDepartamento);
router.put('/alterar/:id', updateDepartamento);
router.delete('/deletar-departamento/:id', deleteDepartamento)
export default router;
