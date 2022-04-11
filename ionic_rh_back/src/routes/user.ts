import express from "express";

import {
  CadastroUser,
  loginUser,
  getAllUser,
  updateUser,
  getLoggedUserData,
  adicionarIdioma,
  adicioanrEscolaridade,
  getUserById
} from "controllers/User";
import {
  insertContratoUser
} from 'controllers/contrato'
import {
  auth,
  verifyUserRole
} from 'middlewares/auth'

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
router.put(
  '/update',
  adicioanrEscolaridade,
  adicionarIdioma,
  updateUser
);
router.get('/logged-user-info', getLoggedUserData);
router.get('/allUser', verifyUserRole(["Administrador"]), getAllUser);

// Rotas de Contrato
// Pegar o Contrato, iserir e retornar os valores
router.get('/user-info/:id', verifyUserRole(["Administrador","Gestor"]), getUserById )
router.post('/Inserir-contrato-user/:id', verifyUserRole(["Administrador","Gestor"]), insertContratoUser , getUserById )
router.get('/Contrato-user', verifyUserRole(["Administrador","Gestor"]), getLoggedUserData)
export default router; 
