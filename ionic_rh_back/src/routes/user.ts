import express from "express";

import {
  CadastroUser,
  loginUser,
  getAllUser,
  updateUser,
  getLoggedUserData,
  adicionarIdioma,
  adicioanrEscolaridade,
  getUserById,
  adicionarTelefone,
  adicionarEndereco,
  getAllUsers
} from "controllers/User";

import {
  insertContratoUser, updateContratoUser
} from 'controllers/contrato'

import {
  auth,
  verifyUserRole
} from 'middlewares/auth';

import {
  verifyUserExistsByEmail,
  verifyLoginRequestValues,
  verifyRegisterRequestValues,
  verifyUpdateRequestValues,
  verifyUsedCpf
} from "middlewares/user";


const router = express.Router();

router.post(
  '/cadastro',
  verifyUserExistsByEmail,
  verifyRegisterRequestValues,
  CadastroUser
);

router.post(
  '/login',
  verifyLoginRequestValues,
  loginUser
);

router.use(auth);

router.put(
  '/update',
  adicioanrEscolaridade,
  adicionarIdioma,
  adicionarTelefone,
  adicionarEndereco,
  updateUser
);

router.get(
  '/logged-user-info',
  getLoggedUserData);

router.get(
  '/allUser',
  verifyUserRole(["Administrador"]),
  getAllUser);

router.get(
  '/user-info',
  getLoggedUserData);

/* router.get(
  '/allUser',
  getAllUser); */

router.get(
  '/Get-All-User',
  verifyUserRole(["Administrador"]), 
  getAllUsers )

// Rotas de Contrato
router.get(
  '/user-info/:id',
  verifyUserRole(["Administrador", "Gestor"]),
  getUserById)
router.post(
  '/Inserir-contrato-user/:id',
  verifyUserRole(["Administrador", "Gestor"]),
  insertContratoUser,
  getUserById)
router.get(
  '/Contrato-user',
  verifyUserRole(["Administrador", "Gestor"]),
  getLoggedUserData)
router.put(
  '/update-contrato-user/:id',
  verifyUserRole(["Administrador", "Gestor"]),
  updateContratoUser,
  getUserById)
  
export default router; 
