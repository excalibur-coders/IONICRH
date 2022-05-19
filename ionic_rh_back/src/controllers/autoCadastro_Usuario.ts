import { Response, Request, NextFunction } from "express";

import 'config/dotenv';
import jwtDecode from "jwt-decode";
import { IUser } from "interfaces/IUser";
import { AppDataSource } from "config/database";
import { user } from "models/user";
import { endereco } from "models/user_endereco";
import { escolaridade } from "models/user_escola";
import { idiomas } from "models/user_idioma";
import { telefone } from "models/user_telefone";
import { documentos } from "models/user_docs";
import { dependente } from "models/userDependente";
import path from "path";
import multer from 'multer';
import multerConfig from 'config/multer'
import crypto from 'crypto';
import multerS3 from 'multer-s3'
import aws from 'aws-sdk';

interface IDecodedParams {
    id: string;
    exp: string,
    iat: string
}

const userReposiroty = AppDataSource.getRepository(user);
const idiomaRepository = AppDataSource.getRepository(idiomas);
const escolaridadeRepository = AppDataSource.getRepository(escolaridade);
const telefoneRepository = AppDataSource.getRepository(telefone);
const endRepository = AppDataSource.getRepository(endereco)
const docsRepository = AppDataSource.getRepository(documentos)
const dependenteRepository = AppDataSource.getRepository(dependente)

export const updateUser = async (req: Request, res: Response) => {
    try {
        const tokenHeader = req.headers.authorization;
        const splitToken = tokenHeader?.split(' ')[1] as string;
        const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
        const requestBody: IUser = req.body;
        await userReposiroty
            .createQueryBuilder()
            .update(user)
            .set({
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


export const adicionarIdioma = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenHeader = req.headers.authorization;
        const splitToken = tokenHeader?.split(' ')[1] as string;
        const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
        const { idioma_falados } = req.body;
        const AdicionarIdiomas = idioma_falados.map((idioma: any) => {
            return {
                idioma_falados: idioma,
                userUserId: Number(decodedJwt.id)
            }
        })
        await idiomaRepository
            .createQueryBuilder()
            .insert()
            .into(idiomas)
            .values(AdicionarIdiomas)
            .execute()
        next()
    } catch (error) {
        res.json(error)
    }
}

export const adicionarTelefone = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenHeader = req.headers.authorization;
        const splitToken = tokenHeader?.split(' ')[1] as string;
        const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
        const {
            telefones
        } = req.body
        const adcionarTelefone = telefones.map((telefone: any) => {
            return {
                ...telefone,
                userUserId: Number(decodedJwt.id)
            }
        })
        await telefoneRepository
            .createQueryBuilder()
            .insert()
            .into(telefone)
            .values(adcionarTelefone)
            .execute()
        next()
    } catch (error) {
        res.json(error)
    }
}

export const adicionarEscolaridade = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenHeader = req.headers.authorization;
        const splitToken = tokenHeader?.split(' ')[1] as string;
        const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
        const {
            escolaridades
        } = req.body
        const adcionarEscolaridade = escolaridades.map((school: any) => {
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

export const adicionarEndereco = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenHeader = req.headers.authorization;
        const splitToken = tokenHeader?.split(' ')[1] as string;
        const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
        const {
            enderecos
        } = req.body
        const adicionarEndereco = enderecos.map((endereco: any) => {
            return {
                ...endereco,
                userUserId: Number(decodedJwt.id)
            }
        })
        await endRepository
            .createQueryBuilder()
            .insert()
            .into(endereco)
            .values(adicionarEndereco)
            .execute()
        next()
    } catch (error) {
        res.json(error)
    }
}
export const adicionarDependente = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenHeader = req.headers.authorization;
        const splitToken = tokenHeader?.split(' ')[1] as string;
        const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
        const {
            dependentes
        } = req.body
        const adicionarDependete = dependentes.map((deps: any) => {
            return {
                ...deps,
                userUserId: Number(decodedJwt.id)
            }
        })
        await dependenteRepository
            .createQueryBuilder()
            .insert()
            .into(dependente)
            .values(adicionarDependete)
            .execute()
        next()
    } catch (error) {
        res.json(error)
    }
}
export const adicionarDocumento = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenHeader = req.headers.authorization;
        const splitToken = tokenHeader?.split(' ')[1] as string;
        const decodedJwt = jwtDecode<IDecodedParams>(splitToken);
        const { file, avatar } = req.files;

        // var fileName: string;

        // const s3 = {
        //     s3: multerS3({
        //         s3: new aws.S3(),
        //         bucket: String(process.env.BUCKET_NAME),
        //         contentType: multerS3.AUTO_CONTENT_TYPE,
        //         acl: 'public-read',
        //         key: (req, file, cb) => {
        //             crypto.randomBytes(16, (err, hash) => {
        //                 if (err) cb(err);
            
        //                 fileName = `${hash.toString("hex")}-${file.originalname}`;
        //                 const { name , ext  } = path.parse(fileName);
        //                 cb(null, fileName);
        //             });
        //         }
        //     })
        // }

        // const multerConfig = {
        //     storage: s3["s3"],
        //     limits: {
        //         fileSize: 5 * 1024 * 1024,
        //     }
        // }

        // multer(multerConfig).fields([{name: 'file', maxCount: 3}, {name: 'avatar', maxCount: 1}]);
        
        const dados = [...file, ...avatar]
        const salvos = dados.forEach(async (file) => {
            const { name, ext } = path.parse(file.originalname)
            const jubileu = await docsRepository
                .createQueryBuilder()
                .insert()
                .into(documentos)
                .values({
                    docs_nome: name,
                    docs_type: ext,
                    docs_size: multerConfig.limits.fileSize,
                    docs_url: `https://${process.env.BUCKET_NAME}.s3.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${name}${ext}`,
                    userUserId: Number(decodedJwt.id),
                })
                .execute()
                return res.json(jubileu);
            })
        // next()
    } catch (error) {
        res.json(error)
    }
}
