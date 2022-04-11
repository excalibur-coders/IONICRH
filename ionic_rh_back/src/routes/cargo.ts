import express from "express";

import { createCargo } from "controllers/cargo"

const router = express.Router()

router.post('/', createCargo)
export default router