import { Response, Request, NextFunction } from "express";


import 'config/dotenv';

import * as bcrypt from 'bcrypt'

import * as jwt from 'jsonwebtoken'
import jwtDecode from "jwt-decode";

import { IUser } from "interfaces/IUser";

import { AppDataSource } from "config/database";
import { USER } from "models/user"
import { Endereco, escolaridade, Idiomas, Telefone } from "models/user_details";


// Interface do JWT ( Jason Web Token )
interface IDecodedParams {
  id: string;
  exp: string,
  iat: string
}

// Repositorios
const userReposiroty = AppDataSource.getRepository(USER);
const idiomaRepository = AppDataSource.getRepository(Idiomas);
const escolaridadeRepository = AppDataSource.getRepository(escolaridade);
const telefoneRepository = AppDataSource.getRepository(Telefone);
const endRepository = AppDataSource.getRepository(Endereco)

// Register User
export const CadastroUser = async (req: Request, res: Response) => {

  const { user_email, password, user_nome } = req.body

  const passwordHash = await bcrypt.hash(password, 8)

  const user = await userReposiroty.create({
    user_nome,
    user_email,
    password: passwordHash,
  })

  await userReposiroty.save(user)

  delete user.password

  res.json(user);

};

// Login User
export const loginUser = async (req: Request, res: Response) => {

  const { user_email, password } = req.body

  const user = await userReposiroty.find({
    where: {
      user_email
    }
  })

  if (user.length == 1) {
    if (await bcrypt.compare(password, user[0].password as string)) {
      const token = jwt.sign({ id: user[0].user_id }, process.env.APP_SECRET as string, {
        expiresIn: '1D'
      })

      const data = {
        ...user[0],
        token
      }

      return res.json(data);

    } else {
      return res.status(404).json({ message: "Senha incorreta" })
    }
  } else {
    return res.status(404).json({ message: "E-mail incorreto" })
  }
}

// Pegar informação do Usuario Logado
export const getLoggedUserData = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const user = await userReposiroty
      .createQueryBuilder()
      .select([
        'u',
        'i.idioma_falados',
        'e.school_formacao',
        'e.school_instituicao',
        'e.school_inicio',
        'e.school_termino',
        'e.school_status',
        't.tell_ddd',
        't.tell_numero',
        'end'
      ])
      .from(USER, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco', 'end')
      .where(
        "u.user_id =:user_id", {
        user_id: Number(decodedJwt.id)
      })
      .getOne()
    delete user?.password;

    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

//  Auto Cadastro do Colaborador
export const updateUser = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const requestBody: IUser = req.body;

    await userReposiroty
      .createQueryBuilder()
      .update(USER)
      .set({
        "user_nome": requestBody.user_nome,
        "user_cpf": requestBody.user_cpf,
        "user_rg": requestBody.user_rg,
        "user_naturalidade": requestBody.user_naturalidade,
        "user_nascimento": requestBody.user_nascimento,
        "user_genero": requestBody.user_genero,
        "user_raca": requestBody.user_raca,
        "user_nacionalidade": requestBody.user_nacionalidade,
        "user_estado_civil": requestBody.user_estado_civil,
      })
      .where(
        "user_id = :user_id", {
        user_id: decodedJwt.id
      })
      .execute();

    res.json(req.body);

  } catch (error) {
    res.json(error);
  }
};

// Adicionar elemento Idioma
export const adicionarIdioma = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const { idioma_falados } = req.body;

    const AdicionarIdiomas = idioma_falados.map(idioma => {
      return {
        idioma_falados: idioma,
        userUserId: Number(decodedJwt.id)
      }
    })
    const idiomaAdicionado = await idiomaRepository
      .createQueryBuilder()
      .insert()
      .into(Idiomas)
      .values(AdicionarIdiomas)
      .execute()
    next()

  } catch (error) {
    res.json(error)
  }
}

// Adicionar Elemento Telefone
export const adicionarTelefone = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const {
      telefone
    } = req.body
    const adcionarTelefone = telefone.map(telefone => {
      return {
        ...telefone,
        userUserId: Number(decodedJwt.id)
      }
    })
    await telefoneRepository
      .createQueryBuilder()
      .insert()
      .into(Telefone)
      .values(adcionarTelefone)
      .execute()
    next()

  } catch (error) {
    res.json(error)
  }
}


// Adicionar Escolaridade
export const adicioanrEscolaridade = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const {
      escolaridade
    } = req.body
    const adcionarEscolaridade = escolaridade.map(school => {
      return {
        ...school,
        userUserId: Number(decodedJwt.id)
      }
    })
    await escolaridadeRepository
      .createQueryBuilder()
      .insert()
      .into(escolaridade)
      .values(adcionarEscolaridade)
      .execute()

    next()
  } catch (error) {
    res.json(error)
  }
}

// Adicionar Endereco

export const adicionarEndereco = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const {
      endereco
    } = req.body

    const adicionarEndereco = endereco.map(endereco => {
      return {
        ...endereco,
        userUserId: Number(decodedJwt.id)
      }
    })

    await endRepository
      .createQueryBuilder()
      .insert()
      .into(Endereco)
      .values(adicionarEndereco)
      .execute()
    next()
  } catch (error) {
    res.json(error)
  }
}

// Get Usuario Pelo id no parms com contrato
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const dadosContratoUser = await userReposiroty
      .createQueryBuilder()
      .select([
        'u',
        'i.idioma_falados',
        'e.school_formacao',
        'e.school_instituicao',
        'e.school_inicio',
        'e.school_termino',
        'e.school_status',
        't.tell_ddd',
        't.tell_numero',
        'c',
        'end',
        'cont.cargo_head',
        'cont.cargo_nivel',
        'cont.cargo_area',
        'd.dep_name',
        'en.contratante_nome'])
      .from(USER, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco','end')
      .leftJoin('u.contrato', 'c')
      .leftJoin('c.cargo', 'cont')
      .leftJoin('cont.departamento', 'd')
      .innerJoin('c.emp_contratante', 'en')
      .where(
        'u.user_id = :user_id', {
        user_id: id
      })
      .getOne()
    res.json(dadosContratoUser)
  } catch (error) {
    res.json(error)
  }
}

// Route ADMIN
export const getAllUser = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const userQuery = await userReposiroty
      .createQueryBuilder()
      .select([
        'u',
        'i.idioma_falados',
        'e.school_formacao',
        'e.school_instituicao',
        'e.school_inicio',
        'e.school_termino',
        'e.school_status',
        't.tell_ddd',
        't.tell_numero',
        'end',
      ])
      .from(USER, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco','end')
      .getMany()

    res.json(userQuery)
  } catch (err) {
    res.json(req.body)
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {

    const dadosContratoUser = await userReposiroty
      .createQueryBuilder()
      .select([
        'u',
        'i',
        'e',
        't',
        'c',
        'end',
        'cont',
        'd',
        'en'])
      .from(USER, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco', 'end')
      .leftJoin('u.contrato', 'c')
      .leftJoin('c.cargo', 'cont')
      .leftJoin('cont.departamento', 'd')
      .leftJoin('c.emp_contratante', 'en')
      .getMany()
    res.json(dadosContratoUser)
  } catch (error) {
    res.json(req.body)
  }
}