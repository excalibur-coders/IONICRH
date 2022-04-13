import express from "express";
import {
    createEmpCont,
    createPesqDesl,
    getPesqDesligID,
    getAllPesqDeslig
} from "controllers/empresa";

const router = express.Router()


router.post('/crirar-empresa', createEmpCont)
//Pegar Empresa Por ID
//Pegar Empresa Com pesquisa
router.post('/criar-pesquisa-desligamento', createPesqDesl)
router.get('/', getAllPesqDeslig)
router.get('/:id', getPesqDesligID)

export default router;