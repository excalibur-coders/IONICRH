import express from "express";

import { createDepartamento, deleteDepartamento, getAllDepartamentos, getDepartamentoById, updateDepartamento } from "../controllers/Departamento";

const router = express.Router();

router.get('/', getAllDepartamentos);
router.get('/:id', getDepartamentoById);
router.post('/', createDepartamento);
router.put('/:id', updateDepartamento);
router.delete('/:id', deleteDepartamento)
export default router;
