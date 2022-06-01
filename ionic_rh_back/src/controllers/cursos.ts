import { Response, Request, NextFunction } from "express";
import { AppDataSource } from "config/database";
import { curso, modulosCurso, trilha } from "models/trilha";
import { docs_curso } from "models/curso_docs";
import multerConfig from 'config/multercurso'
import path from "path";

const cursoRepository = AppDataSource.getRepository(curso)
const trilhaRepository = AppDataSource.getRepository(trilha)
const docsRepository = AppDataSource.getRepository(docs_curso)

const moduloRepository = AppDataSource.getRepository(modulosCurso)
export const createModulo = async (req: Request, res: Response) => {
    try {
        const {
            modulo_nome,
            cursoCursoId
        } = req.body
        await moduloRepository
            .createQueryBuilder()
            .insert()
            .into(modulosCurso)
            .values(req.body)
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const updateModulo = async (req: Request, res: Response) => {
    try {
        const {
            id
        } = req.params
        await moduloRepository
            .createQueryBuilder()
            .update()
            .set({
                modulo_nome: req.body.modulo_nome,
                cursoCursoId: req.body.cursoCursoId
            })
            .where('modulo_id = :modulo_id', {
                modulo_id: id
            })
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const deleteModulo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await moduloRepository
            .createQueryBuilder()
            .delete()
            .where('modulo_id = :modulo_id', {
                modulo_id: id
            })
            .execute()
        res.json({
            "message": "Modulo deletado com sucesso"
        })
    } catch (error) {
        res.json(error)
    }
}
export const deleteDocs = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await docsRepository
            .createQueryBuilder()
            .delete()
            .where('docs_id = :docs_id', {
                docs_id: id
            })
            .execute()
        res.json({
            "message": "Documento do curso deletado com sucesso"
        })
    } catch (error) {
        res.json(error)
    }
}
export const updateDocs = async (req: Request, res: Response) => {
    try {
        const { docs_nome } = req.body
        const { id } = req.params
        await docsRepository
            .createQueryBuilder()
            .update()
            .set({
                docs_nome: docs_nome
            })
            .where('docs_id = :docs_id', {
                docs_id: id
            })
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const createCurso = async (req: Request, res: Response) => {
    try {
        const {
            curso_descricao,
            curso_nome,
            curso_duracao,
        } = req.body
        await cursoRepository
            .createQueryBuilder()
            .insert()
            .into(curso)
            .values(req.body)
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const updateCurso = async (req: Request, res: Response) => {
    try {
        const {
            curso_descricao,
            curso_nome,
            curso_duracao,
        } = req.body
        const { id } = req.params
        await cursoRepository
            .createQueryBuilder()
            .update()
            .set(req.body)
            .where(
                "curso_id = :curso_id",
                { curso_id: id }
            )
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const deleteCurso = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await cursoRepository
            .createQueryBuilder()
            .delete()
            .where(
                "curso_id = :curso_id",
                { curso_id: id }
            )
            .execute()
        res.json({
            "message": "Departamento deletado com sucesso"
        })
    } catch (error) {
        res.json(error)
    }
}
export const readOneCurso = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const findCursoById = await cursoRepository
            .find({
                relations: {
                    modulosCurso: {
                        docs_curso: true
                    }
                },
                where: {
                    curso_id: Number(id)
                }
            })
        res.json(findCursoById)
    } catch (error) {
        res.json(error)
    }
}
export const readManyCurso = async (req: Request, res: Response) => {
    try {
        const findCursoById = await cursoRepository
            .find()
        res.json(findCursoById)
    } catch (error) {
        res.json(error)
    }
}
export const createTrilha = async (req: Request, res: Response) => {
    try {
        const {
            trilha_nome,
            consultor,
        } = req.body
        await trilhaRepository
            .createQueryBuilder()
            .insert()
            .into(trilha)
            .values(req.body)
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const updateTrilha = async (req: Request, res: Response) => {
    try {
        const {
            trilha_nome,
            consultor,
        } = req.body
        const {
            id
        } = req.params
        trilhaRepository
            .createQueryBuilder()
            .update()
            .set(req.body)
            .where(
                "trilha_id = :trilha_id", {
                trilha_id: id
            })
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const deleteTrilha = async (req: Request, res: Response) => {
    try {
        const {
            id
        } = req.params
        trilhaRepository
            .createQueryBuilder()
            .delete()
            .where(
                "trilha_id = :trilha_id", {
                trilha_id: id
            })
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const readOneTrilha = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const findTrilhaById = await trilhaRepository
            .find(
                {
                    relations: {
                        juntos: {
                            modulosCurso: {
                                docs_curso: true
                            }
                        }
                    },
                    where: {
                        trilha_id: Number(id)
                    }
                })
        res.json(findTrilhaById)
    } catch (error) {
        res.json(error)
    }
}
export const readManyTrilha = async (req: Request, res: Response) => {
    try {
        const findTrilhaById = await trilhaRepository
            .find({
                relations: ['juntos']
            })
        res.json(findTrilhaById)
    } catch (error) {
        res.json(error)
    }
}
export const criarRelacao = async (req: Request, res: Response) => {
    try {
        const {
            trilhaTrilhaId,
            userUserId,
        } = req.body
        req.body.trilhaTrilhaId = trilhaTrilhaId
        req.body.userUserId = userUserId
        await trilhaRepository
            .createQueryBuilder()
            .relation(trilha, "junto")
            .of(trilhaTrilhaId)
            .add(userUserId)
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const createRelationCursoTrilha = async (req: Request, res: Response) => {
    try {
        const {
            cursoCursoId,
            trilhaTrilhaId
        } = req.body
        await trilhaRepository
            .createQueryBuilder()
            .relation(trilha, "juntos")
            .of(trilhaTrilhaId)
            .add(cursoCursoId)
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const consultaQueryCursoTrilhUser = async (req: Request, res: Response) => {
    try {
        const {
            id
        } = req.params
        const queryConsult = await trilhaRepository.find({
            relations: ['junto', 'juntos'],
            where: { trilha_id: Number(id) }
        })
        res.json(queryConsult)
    } catch (error) {
        res.json(error)
    }
}
export const updateCursoTrilha = async (req: Request, res: Response) => {
    try {
        const {
            trilhaTrilhaId, cursoCursoId
        } = req.params
        req.params.trilhaTrilhaId = trilhaTrilhaId
        req.params.cursoCursoId = cursoCursoId
        await AppDataSource
            .createQueryBuilder()
            .update("trilha_juntos_curso")
            .set({
                "cursoCursoId": req.body.cursoCursoId
            })
            .where("trilhaTrilhaId = :trilhaTrilhaId", {
                trilhaTrilhaId: trilhaTrilhaId
            })
            .andWhere(
                "cursoCursoId = :cursoCursoId", {
                cursoCursoId: cursoCursoId
            })
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const updateUserTrilha = async (req: Request, res: Response) => {
    try {
        const {
            trilhaTrilhaId, userUserId
        } = req.params
        req.params.trilhaTrilhaId = trilhaTrilhaId
        req.params.cursoCursoId = userUserId
        await AppDataSource
            .createQueryBuilder()
            .update("trilha_junto_user")
            .set({
                "userUserId": req.body.userUserId
            })
            .where("trilhaTrilhaId = :trilhaTrilhaId", {
                trilhaTrilhaId: trilhaTrilhaId
            })
            .andWhere(
                "userUserId = :userUserId", {
                userUserId: userUserId
            })
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
export const removeUserTrilha = async (req: Request, res: Response) => {
    try {
        const {
            trilhaTrilhaId, userUserId
        } = req.params
        req.params.trilhaTrilhaId = trilhaTrilhaId
        req.params.userUserId = userUserId
        const deleteRelacao = await trilhaRepository
            .createQueryBuilder()
            .relation(trilha, "junto")
            .of(trilhaTrilhaId)
            .remove(userUserId)
        res.json(deleteRelacao)
    } catch (error) {
        res.json(error)
    }
}
export const removeCursoTrilha = async (req: Request, res: Response) => {
    try {
        const {
            trilhaTrilhaId, cursoCursoId
        } = req.params
        req.params.trilhaTrilhaId = trilhaTrilhaId
        req.params.cursoCursoId = cursoCursoId
        const deleteRelacao = await trilhaRepository
            .createQueryBuilder()
            .relation(trilha, "juntos")
            .of(trilhaTrilhaId)
            .remove(cursoCursoId)
        res.json(deleteRelacao)
    } catch (error) {
        res.json(error)
    }
}
export const adicionarConteudo = async (req: Request, res: Response) => {
    try {
        const {
            docsDocsId
        } = req.params
        const { file } = req.files;
        const dados = [...file]
        const salvos = dados.forEach(async (file) => {
            const { name, ext } = path.parse(file.originalname)
            const { base } = path.parse(file.location)
            const jubileu = await docsRepository
                .createQueryBuilder()
                .insert()
                .into(docs_curso)
                .values({
                    docs_nome: name,
                    docs_key: file.key,
                    docs_type: ext,
                    docs_header: file.fieldname,
                    docs_size: multerConfig.limits.fileSize,
                    docs_url: `https://${process.env.BUCKET_NAME_EXCALIBUR}.s3.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${base}`,
                    docsDocsId: Number(docsDocsId)
                })
                .execute()
            return jubileu
        })
        res.json(req.files)
    } catch (error) {
        res.json(error)
    }
}

export const pegarTrilhaCurso = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, curso, docs } = req.params
        req.params.id = id
        req.params.curso = curso
        const teste = await trilhaRepository
            .createQueryBuilder()
            .select([
                "t",
                "c",
                "modulo",
                "docs"
            ])
            .from(trilha, 't')
            .leftJoin('t.juntos', 'c')
            .leftJoin('c.docs_curso', 'doc')
            .where('t.trilha_id = :trilha_id', {
                trilha_id: id
            })
            .andWhere('curso_id = :curso_id ', {
                curso_id: curso
            })
            .andWhere('docs_id = :docs_id', {
                docs_id: docs
            })
            .getOne()
        res.json(teste)
    } catch (error) {
        res.json(error)
    }
}