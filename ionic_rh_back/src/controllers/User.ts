import jwtDecode from "jwt-decode";

import { Response, Request, NextFunction } from "express";

import { AppDataSource } from "config/database";
import { IUser } from "interfaces/IUser";
import { USER } from "models/user"
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import 'config/dotenv';
import { Escolaridade, Idiomas } from "models/user_details";
import { Contrato } from "models/empresa";

interface IDecodedParams {
  id: string;
  exp: string,
  iat: string
}

const userReposiroty = AppDataSource.getRepository(USER);
const idiomaRepository = AppDataSource.getRepository(Idiomas);
const escolaridadeRepository = AppDataSource.getRepository(Escolaridade);
const contratoRepository = AppDataSource.getRepository(Contrato);

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

export const getLoggedUserData = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const user = await userReposiroty
      .createQueryBuilder()
      .select(['u', 'i.idioma_falados', 'e'])
      .from(USER, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .where("u.user_id =:user_id", { user_id: Number(decodedJwt.id) })
      .getOne()
    delete user?.password;

    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

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
        "user_naturalidade": requestBody.user_naturalidade,
        "user_nascimento": requestBody.user_nascimento,
        "user_genero": requestBody.user_genero,
        "user_raca": requestBody.user_raca,
        "user_nacionalidade": requestBody.user_nacionalidade,
        "user_estado_civil": requestBody.user_estado_civil,
      })
      .where("user_id = :user_id", { user_id: decodedJwt.id })
      .execute();

    res.json(req.body);

  } catch (error) {
    res.json(error);
  }
};

// Route ADMIN
export const getAllUser = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const userQuery = await userReposiroty
      .createQueryBuilder()
      .select(['u', 'i.idioma_falados', 'e'])
      .from(USER, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .getMany()
    res.json(userQuery)
  } catch (err) {
    res.json(req.body)
  }
}

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

// Adicionar Elemento Escolaridade

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
      .into(Escolaridade)
      .values(adcionarEscolaridade)
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
    .select(['u', 'i.idioma_falados', 'e', 'c','cont','d'])
    .from(USER, 'u')
    .leftJoin('u.idioma', 'i')
    .leftJoin('u.escolaridade', 'e')
    .leftJoin('u.contrato','c')
    .innerJoin('c.cargo','cont')
    .innerJoin('cont.departamento','d')
    .where('u.user_id = :user_id', {user_id:id}) //Pegar o id igual ao req.parms
    .getOne()
    res.json(dadosContratoUser)
  } catch (error) {
    res.json(error)
  }
}