import { Response, Request } from "express";
import 'config/dotenv';
import jwtDecode from "jwt-decode";
import { AppDataSource } from "config/database";
import { user } from "models/user";

interface IDecodedParams {
  id: string;
  exp: string,
  iat: string
}

// Repositorios
const userReposiroty = AppDataSource.getRepository(user);
export const getLoggedUserData = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;
    const splitToken = tokenHeader?.split(' ')[1] as string;
    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
    const inf_user = await userReposiroty
      .createQueryBuilder()
      .select([
        'u',
        'i',
        'e',
        't',
        'end'
      ])
      .from(user, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco', 'end')
      .where(
        "u.user_id =:user_id", {
        user_id: Number(decodedJwt.id)
      })
      .getOne()
    delete inf_user?.password;
    res.json(inf_user);
  } catch (error) {
    res.json(error);
  }
};

export const getColaboradorContratoID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
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
        'en'
      ])
      .from(user, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco', 'end')
      .leftJoin('u.contrato', 'c')
      .leftJoin('c.cargo', 'cont')
      .leftJoin('cont.departamento', 'd')
      .leftJoin('c.emp_contratante', 'en')
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

export const getAllColaborador = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const userQuery = await userReposiroty
      .createQueryBuilder()
      .select([
        'u',
        'i',
        'e',
        't',
        'end',
      ])
      .from(user, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco', 'end')
      .getMany()

      console.log(userQuery);

    res.json(userQuery)
  } catch (err) {
    res.json(req.body)
  }
}

export const getAllColaboradorContrato = async (req: Request, res: Response) => {
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
        'en'
      ])
      .from(user, 'u')
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
