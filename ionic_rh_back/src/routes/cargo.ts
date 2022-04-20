import express from "express";

import {
    createCargo,
    getAllCargos
} from "controllers/cargo"

const router = express.Router()

router.post('/criar-cargo', createCargo)
router.get('/cargos', getAllCargos)
export default router