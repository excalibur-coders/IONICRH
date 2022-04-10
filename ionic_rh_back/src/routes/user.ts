import express from "express";

import { 
  CadastroUser, 
  loginUser, 
  getAllUser, 
  updateUser,
  getLoggedUserData
} from "controllers/User";
import { auth } from 'middlewares/auth'
import {
  verifyUserExistsByEmail,
  verifyLoginRequestValues, 
  verifyRegisterRequestValues 
} from "middlewares/user";

const router = express.Router();

router.post(
  '/cadastro',
  verifyUserExistsByEmail,
  verifyRegisterRequestValues, 
  CadastroUser
);
router.post('/login', verifyLoginRequestValues, loginUser)
router.use(auth);
router.put('/update', updateUser);
router.get('/user-info', getLoggedUserData);
router.get('/allUser',  getAllUser);

export default router; 
