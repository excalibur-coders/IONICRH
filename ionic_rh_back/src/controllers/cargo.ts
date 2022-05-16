import { Response, Request } from "express";
import { AppDataSource } from 'config/database'
import { cargo } from 'models/cargo'

const cargoRepository = AppDataSource.getRepository(cargo)

export const createCargo = async (req: Request, res: Response) => {
    try {
        const {
            cargo_head,
            cargo_nivel,
            cargo_area,
            departamentoDepId
        } = req.body
        await cargoRepository
            .createQueryBuilder()
            .insert()
            .into(cargo)
            .values(req.body)
            .execute()
        res.json(req.body)

    } catch (error) {
        res.json(error)
    }
}

export const getAllCargos = async (req: Request, res: Response) => {
    try {
        const cargos = await cargoRepository
        .createQueryBuilder()
        .select([
            'c',
            'd'
        ])
        .from(cargo, 'c')
        .leftJoin('c.departamento','d')
        .getMany()
        res.json(cargos)
    } catch (error) {
        res.json(error)
    }
}