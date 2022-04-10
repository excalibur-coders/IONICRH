import express from "express";

import { 
  CadastroUser, 
  loginUser, 
  getAllUser, 
  updateUser,
  getLoggedUserData
} from "controllers/User";
import { auth } from 'Middleware/auth'

const router = express.Router();

router.post('/cadastro', CadastroUser);
router.post('/login', loginUser)
router.use(auth);
router.put('/update',  updateUser);
router.get('/user-info', getLoggedUserData);
router.get('/allUser',  getAllUser);

export default router; 
