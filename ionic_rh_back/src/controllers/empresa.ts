import { Response, Request, NextFunction } from "express";
import { AppDataSource } from 'config/database'
import { Empresa_Contrante, Pesquisa_desligamento } from 'models/empresa'


const empcontRepository = AppDataSource.getRepository(Empresa_Contrante);
const pesqdesRepository = AppDataSource.getRepository(Pesquisa_desligamento);

export const createEmpCont = async (req: Request, res: Response) => {

    //Criar a empresa contratante 
    //Criar a pesquisa de desligamento relacionada a empresa contratante
    try {
        const {
            contratante_nome,
            contratante_cnpj
        } = req.body

        await empcontRepository
            .createQueryBuilder()
            .insert()
            .into(Empresa_Contrante)
            .values(
                req.body
            )
            .execute()

        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

export const getPesqDesligID = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const dadosEmpresaDesl = await pesqdesRepository
            .createQueryBuilder()
            .select([
                'e',
                'p'
            ])
            .from(Empresa_Contrante, 'e')
            .leftJoin('e.pesq_desligamento', 'p')
            .where(
                'e.contratante_id = :contratante_id', {
                contratante_id: id
            })
            .getOne()

        res.json(dadosEmpresaDesl)

    } catch (error) {
        res.json(error)
    }
}

export const getAllPesqDeslig = async (req: Request, res: Response) => {
    try {

        const dadosEmpresaDesl = await pesqdesRepository
            .createQueryBuilder()
            .select([
                'e',
                'p.pesq_desligamento'])
            .from(Empresa_Contrante, 'e')
            .leftJoin('e.pesq_desligamento', 'p')
            .getMany()

        res.json(dadosEmpresaDesl)

    } catch (error) {
        res.json(error)
    }
}

export const createPesqDesl = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const {
            pesq_desligamento,
            empContratanteContratanteId
        } = req.body

        await pesqdesRepository
            .createQueryBuilder()
            .insert()
            .into(Pesquisa_desligamento)
            .values(req.body)
            .execute()

        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}