import express from "express";

import { cadastro } from 'controllers/Cadastro_Usuario';
import { loginUser } from 'controllers/Login_Usuario';
import {
  adicionarEscolaridade,
  adicionarDependente,
  adicionarDocumento,
  adicionarEndereco,
  adicionarIdioma, adicionarTelefone,
  updateUser,
  adicionarAvatar
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
import { downloadFilesUser, getFilesUser } from "controllers/filesSet";


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
  adicionarEscolaridade,
  adicionarIdioma,
  adicionarTelefone,
  adicionarEndereco,
  adicionarDependente,
  updateUser
);

// Home do usario
router.get(
  '/usuario-perfil',
  getLoggedUserData);

// Pegar TODOS usarios
router.get(
  '/allUser',
  verifyUserRole(["Administrador"]),
  getAllColaborador);

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
  multer(multerConfig).fields([{name: 'file', maxCount: 3}]),
  adicionarDocumento
)
router.post(
  '/adicionarAvatar',
  multer(multerConfig).fields([{name: 'avatar', maxCount: 1}]),
  adicionarAvatar
)
router.get('/docs/:id', getFilesUser)

router.get('/docs/download/:docs_id', downloadFilesUser)

// Fazer alteração no contrato do usuario
router.put(
  '/update-contrato-user/:id',
  verifyUserRole(["Administrador", "Gestor"]),
  updateContratoUser,)

export default router; 
