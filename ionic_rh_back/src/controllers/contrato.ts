import { AppDataSource } from "config/database";
import { Contrato } from "models/empresa";
import { Request, Response, NextFunction } from "express";

const contratoRepository = AppDataSource.getRepository(Contrato)
// Contrato do Usuario
export const insertContratoUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            contrato_base,
            contrato_tempo_de_casa,
            contrato_termos,
            contrato_tempo_formalizacao,
            contrato_dominio,
            contrato_data_desligamento,
            contrato_distrato,
            contrato_faixa_salarial,
            contrato_plano_saude,
            contrato_vale_transporte,
            contrato_vale_refeicao,
            contrato_vale_alimentacao,
            contrato_auxilio_creche
        } = req.body
        const {
            id
        } = req.params
        req.body.userUserId = id
        await contratoRepository
            .createQueryBuilder()
            .insert()
            .into(Contrato)
            .values(req.body)
            .execute()
        next()
    } catch (error) {
        res.json(error)
    }
}