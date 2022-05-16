import express from "express";
import {
    createEmpCont,
    createPesqDesl,
    getPesqDesligID,
    getAllPesqDeslig,
    getAllEmpresa
} from "controllers/empresa";

const router = express.Router()


router.post('/crirar-empresa', createEmpCont)
router.post('/criar-pesquisa-desligamento', createPesqDesl)
router.get('/', getAllPesqDeslig)
router.get('/empresas', getAllEmpresa);
router.get('/:id', getPesqDesligID)

export default router;
