import express from "express";

import { createUser, updateUser } from "../controllers/User";

const router = express.Router();

router.post('/', createUser);
router.put('/update', updateUser);

export default router; 
