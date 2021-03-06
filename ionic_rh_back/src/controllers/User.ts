import { Response, Request, query } from "express";
import 'config/dotenv';
import jwtDecode from "jwt-decode";
import { AppDataSource } from "config/database";
import { user } from "models/user";
import { videoConclusao } from "models/video";
import { docs_curso } from "models/curso_docs";
import { modulosCurso } from "models/trilha";
import { moduloConclusao } from "models/modulos";

interface IDecodedParams {
  id: string;
  exp: string,
  iat: string
}

const userReposiroty = AppDataSource.getRepository(user);
const videoRepository = AppDataSource.getRepository(modulosCurso)
const docsRepository = AppDataSource.getRepository(docs_curso)
const concluiuRepository = AppDataSource.getRepository(videoConclusao)

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
        'ts',
        'cs',
        't',
        'c',
        'avatar',
        'docs',
        'end',
        'cont',
        'd',
        'en',
      ])
      .from(user, 'u')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco', 'end')
      .leftJoin('u.docsavatar', 'avatar')
      .leftJoin('u.docs', 'docs')
      .leftJoin('u.contrato', 'c')
      .leftJoin('u.junto', 'ts')
      .leftJoin('ts.juntos', 'cs')
      .leftJoin('c.cargo', 'cont')
      .leftJoin('cont.departamento', 'd')
      .leftJoin('c.emp_contratante', 'en')
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
        'e',
        'i',
        'end',
        'docs',
        'docss',
        'dep',
        'pj',
        't',
        'c',
        'cont',
        'd',
        'en',
        'desl'
      ])
      .from(user, 'u')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.dependente', 'dep')
      .leftJoin('u.docsavatar', 'docs')
      .leftJoin('u.docs', 'docss')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco', 'end')
      .leftJoin('u.emp_pj', 'pj')
      .leftJoin('u.desligamento', 'desl')
      .leftJoin('u.contrato', 'c')
      .leftJoin('u.junto', 'ts')
      .leftJoin('ts.juntos', 'cs')
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
        'e',
        'i',
        'end',
        'docs',
        'docss',
        'dep',
        'pj',
        'c',
        'cont',
        'd',
        'desl',
        'en'
      ])
      .from(user, 'u')
      .leftJoin('u.escolaridade', 'e')
      .leftJoin('u.dependente', 'dep')
      .leftJoin('u.docsavatar', 'docs')
      .leftJoin('u.docs', 'docss')
      .leftJoin('u.idioma', 'i')
      .leftJoin('u.telefone', 't')
      .leftJoin('u.endereco', 'end')
      .leftJoin('u.desligamento', 'desl')
      .leftJoin('u.emp_pj', 'pj')
      .leftJoin('u.contrato', 'c')
      .leftJoin('c.cargo', 'cont')
      .leftJoin('cont.departamento', 'd')
      .leftJoin('c.emp_contratante', 'en')
      .getMany()

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
export const testeDoMilenio = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;
    const splitToken = tokenHeader?.split(' ')[1] as string;
    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
    const {
      id
    } = req.params
    await docsRepository
      .createQueryBuilder()
      .select('d')
      .from(docs_curso, 'd')
      .where('docs_id = :docs_id', {
        docs_id: id
      })
      .insert()
      .into(videoConclusao)
      .values({
        userUserId: Number(decodedJwt.id),
        concluiu: 1,
        videoVideoId: Number(id)
      })
      .execute()
    res.json(req.body)
  } catch (error) {
    res.json(error)
  }
}
export const testeDoSecundenio = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;
    const splitToken = tokenHeader?.split(' ')[1] as string;
    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
    const {
      id
    } = req.params
    await videoRepository
      .createQueryBuilder()
      .select('d')
      .from(modulosCurso, 'd')
      .where('modulo_id = :modulo_id', {
        modulo_id: id
      })
      .insert()
      .into(moduloConclusao)
      .values({
        userUserId: Number(decodedJwt.id),
        concluiu: 1,
        moduloModuloId: Number(id)
      })
      .execute()
    res.json(req.body)
  } catch (error) {
    res.json(error)
  }
}
export const pegarUserConcluiuVideo = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;
    const splitToken = tokenHeader?.split(' ')[1] as string;
    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
    const find = await userReposiroty
      .createQueryBuilder()
      .select(["u.user_id", "c", "d"])
      .from(user, 'u')
      .leftJoin('u.concluiu', 'c')
      .leftJoin('c.docs', 'd')
      .where(
        "u.user_id =:user_id", {
        user_id: Number(decodedJwt.id)
      })
      .getOne()
    res.json(find)
  } catch (error) {
    res.json(error)
  }
}

export const countPorcentagem = async (req: Request, res: Response) => {
  try {
    const countVideo =
      await userReposiroty
        .query(
          `
          SELECT u.user_nome, count(mc.modulo_nome) as porcentagem FROM 
          user u
          LEFT JOIN trilha_junto_user tju ON tju.userUserId = u.user_id
          LEFT JOIN trilha t ON tju.trilhaTrilhaId = t.trilha_id
          LEFT JOIN trilha_juntos_curso tjc ON tjc.trilhaTrilhaId = t.trilha_id
          LEFT JOIN curso c ON c.curso_id = tjc.cursoCursoId
          LEFT JOIN modulos_curso mc ON mc.cursoCursoId = c.curso_id
          GROUP BY u.user_nome
      `)
    res.json(countVideo)
  } catch (error) {
    res.json(error)
  }
}

export const countPorcentagemModulo = async (req: Request, res: Response) => {
  try {
    const countVideo =
      await videoRepository.query(
        `
      SELECT 
            u.user_nome,
            COUNT(concluiu) as PORCENTAGEM
      FROM
            user u,
            video_conclusao v 
      WHERE 
            v.userUserId = u.user_id  
      GROUP BY 
            u.user_nome;
      `)

    res.json(countVideo)
  } catch (error) {
    res.json(error)
  }
}