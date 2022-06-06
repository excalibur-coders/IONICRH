import { Response, Request, NextFunction } from "express";
import { AppDataSource } from 'config/database'
import { empresacontratante } from 'models/emp_contratante'
import { pesquisadesligamento } from 'models/pesquisa_desligamento'


const empcontRepository = AppDataSource.getRepository(empresacontratante);
const pesqdesRepository = AppDataSource.getRepository(pesquisadesligamento);

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
            .into(empresacontratante)
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
            .from(empresacontratante, 'e')
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
            .from(empresacontratante, 'e')
            .leftJoin('e.pesq_desligamento', 'p')
            .getMany()

        res.json(dadosEmpresaDesl)

    } catch (error) {
        res.json(error)
    }
}

export const getAllEmpresa = async (req: Request, res: Response) => {
    try {
        const dadosEmpresa = await empcontRepository
            .createQueryBuilder()
            .select('e')
            .from(empresacontratante, 'e')
            .getMany()

        res.json(dadosEmpresa)

    } catch (error) {
        res.json(error)
    }
}

export const createPesqDesl = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const {
            pesq_desligamento,
            userUserId,
            pesq_userDesligado
        } = req.body

        await pesqdesRepository
            .createQueryBuilder()
            .insert()
            .into(pesquisadesligamento)
            .values(req.body)
            .execute()

        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}
