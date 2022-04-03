import express from "express";

import { getAllDepartamentos, getDepartamentoById } from "../controllers/Departamento";

const router = express.Router();

router.get('/', getAllDepartamentos);
router.get('/:id', getDepartamentoById);

export default router;
