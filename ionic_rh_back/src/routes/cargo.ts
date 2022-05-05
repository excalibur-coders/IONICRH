import express from "express";

import {
    createCargo,
    getAllCargos
} from "controllers/cargo"
import {
    auth,
    verifyUserRole
  } from 'middlewares/auth';
const router = express.Router()

router.post('/criar-cargo', createCargo)
router.get('/cargos', verifyUserRole(["Administrador","Colaborador"]), getAllCargos)
export default router