import { AppDataSource } from "config/database";
import { Response, Request, NextFunction } from "express";
import { user } from "models/user";
import { documentos } from "models/user_docs";
import aws from 'aws-sdk';
const docsRepository = AppDataSource.getRepository(user)
const downloadRepository = AppDataSource.getRepository(documentos)

export const getFilesUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await docsRepository
            .createQueryBuilder()
            .select(["u.user_nome", "d", "da"])
            .from("user", "u")
            .leftJoin("u.docs", "d")
            .leftJoin("u.docsavatar", "da")
            .where("d.userUserID = :user_id", { user_id: id })
            .andWhere("da.userUserID = :user_id", { user_id: id })
            .getMany()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}
export const downloadFilesUser = async (req: Request, res: Response) => {
    try {
        const dados = await functionDownload(req, res)
        const arquivo = `${dados?.docs_key}`
        const s3 = new aws.S3();
        const options = {
            Bucket: process.env.BUCKET_NAME,
            Key: arquivo,
        };
        res.attachment(arquivo);
        const fileStream = s3.getObject(options).createReadStream();
        fileStream.pipe(res);
    } catch (error) {
        res.json(error)
    }
}
export const functionDownload = async (req: Request, res: Response) => {
    try {
        const { docs_id } = req.params
        const dados = await downloadRepository.findOne({
            where: {
                docs_id: Number(docs_id),
            }
        })
        return (dados)
    } catch (error) {

    }
}
