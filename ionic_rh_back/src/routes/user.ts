import express from "express";

import { cadastro } from 'controllers/Cadastro_Usuario';
import { loginUser } from 'controllers/Login_Usuario';
import {
  adicioanrEscolaridade,
  adicionarDependente,
  adicionarDocumento,
  adicionarEndereco,
  adicionarIdioma, adicionarTelefone,
  updateUser
} from 'controllers/autoCadastro_Usuario'
import multer from 'multer';
import multerConfig from 'config/multer'
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
import { getLoggedUserData, getAllColaborador, getColaboradorContratoID } from "controllers/User";


const router = express.Router();

// Cadastro do usuario
router.post(
  '/cadastro',
  verifyUserExistsByEmail,
  verifyRegisterRequestValues,
  cadastro
);

// Login do usuario
router.post(
  '/login',
  verifyLoginRequestValues,
  loginUser
);

router.use(auth);

// Auto Cadastro do usario
router.put(
  '/auto-cadastro',
  multer(multerConfig).single('file'),  
  adicioanrEscolaridade,
  adicionarIdioma,
  adicionarTelefone,
  adicionarEndereco,
  adicionarDependente,
  adicionarDocumento,
  updateUser
);

// Home do usario
router.get(
  '/usuario-perfil',
  getLoggedUserData);

/* router.get(
  '/user-info',
  getLoggedUserData); */


// Pegar TODOS usarios
router.get(
  '/allUser',
  verifyUserRole(["Administrador"]),
  getAllColaborador);


/* router.get(
  '/allUser',
  getAllUser); */


router.get(
  '/listagen-user',
  verifyUserRole(["Administrador"]),
  getAllColaborador)

// Rotas de Contrato
router.get(
  '/usuario-perfil/:id',
  verifyUserRole(["Administrador", "Gestor"]),
  getColaboradorContratoID)
router.post(
  '/usuario-perfil/:id',
  verifyUserRole(["Administrador", "Gestor"]),
  insertContratoUser,
  getColaboradorContratoID)

router.post(
  '/teste',
 /*  multer(multerConfig).single('file'),
  adicionarDocumento */
  adicionarDependente
)
/* 
router.get(
  '/Contrato-user',
  verifyUserRole(["Administrador", "Gestor"]),
  getLoggedUserData)
 */
// Fazer alteração no contrato do usuario
router.put(
  '/update-contrato-user/:id',
  verifyUserRole(["Administrador", "Gestor"]),
  updateContratoUser,
  getColaboradorContratoID)

export default router; 
