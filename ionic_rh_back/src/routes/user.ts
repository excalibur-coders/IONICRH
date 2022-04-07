import express from "express";

import { createUser, loginUser, readUser, updateUser } from "controllers/User";

const router = express.Router();

router.post('/', createUser);
router.put('/update', updateUser);
router.get('/read', readUser);
router.get('/login/', loginUser)

export default router; 
