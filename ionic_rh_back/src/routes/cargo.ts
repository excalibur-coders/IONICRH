import express from "express";

import {
    createCargo,
    getAllCargos
} from "controllers/cargo"

const router = express.Router()

router.post('/', createCargo)
router.get('/cargo', getAllCargos)
export default router