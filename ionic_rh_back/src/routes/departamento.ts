import express from "express";

import { 
  createDepartamento, 
  deleteDepartamento, 
  getAllDepartamentos, 
  getDepartamentoById, 
  updateDepartamento 
} from "controllers/Departamento";
import { auth } from "Middleware/auth";

const router = express.Router();

router.use(auth)
router.get('/', getAllDepartamentos);
router.get('/:id', getDepartamentoById);
router.post('/', createDepartamento);
router.put('/:id', updateDepartamento);
router.delete('/:id', deleteDepartamento)
export default router;
