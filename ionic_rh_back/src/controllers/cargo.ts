import { Response, Request } from "express";
import { AppDataSource } from 'config/database'
import { Cargo } from 'models/empresa'

const cargoRepository = AppDataSource.getRepository(Cargo)

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
            .into(Cargo)
            .values(req.body)
            .execute()
        res.json(req.body)

    } catch (error) {
        res.json(error)
    }
}

export const getAllCargos = async (req: Request, res: Response) => {
    try {
        const cargo = await cargoRepository.find({
            select: {
                cargo_area:true
            }
        })
        res.json(cargo)
    } catch (error) {
        res.json(error)
    }
}