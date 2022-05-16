import { AppDataSource } from "config/database";
import { Response, Request, NextFunction } from "express";
import { documentos } from "models/user_docs";

const docsRepository = AppDataSource.getRepository(documentos)

export const getFilesUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await docsRepository
            .createQueryBuilder()
            .select(["d"])
            .from("documentos", "d")
            .leftJoin("d.user", "u")
            .where("d.userUserID = :user_id", { user_id: id })
            .getMany()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

export const downloadFilesUser = async ( req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await docsRepository
            .createQueryBuilder()
            .select(["d"])
            .from("documentos", "d")
            .leftJoin("d.user", "u")
            .where("d.docs_id = :docs_id", { docs_id: id })
            .andWhere("d.userUserID = :user_id", { user_id: id })
            .getOne()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}