import express from "express";
import {
    organograma
} from "controllers/Departamento";
import { auth, verifyUserRole } from "middlewares/auth";
const router = express.Router();
router.use(auth);
router.get('/', verifyUserRole(["Administrador"]), organograma);
export default router;
