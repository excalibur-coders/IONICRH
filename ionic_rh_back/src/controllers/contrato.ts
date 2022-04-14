import { AppDataSource } from "config/database";
import { Contrato } from "models/empresa";
import { Request, Response, NextFunction } from "express";
import { IContrato } from "interfaces/IContrato";

const contratoRepository = AppDataSource.getRepository(Contrato)
// Contrato do Usuario
export const insertContratoUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            contrato_matricula,
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
            contrato_auxilio_creche,
            contrato_type,
            contrato_data_adicao
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

export const updateContratoUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const requestBody: IContrato = req.body
        const {
            id
        } = req.params
        req.params.userUserId = id

        await contratoRepository
            .createQueryBuilder()
            .update(Contrato)
            .set({
                "contrato_id": requestBody.contrato_id,
                "contrato_matricula": requestBody.contrato_matricula,
                "contrato_base": requestBody.contrato_base,
                "contrato_tempo_de_casa": requestBody.contrato_tempo_de_casa,
                "contrato_termos": requestBody.contrato_termos,
                "contrato_tempo_formalizacao": requestBody.contrato_tempo_formalizacao,
                "contrato_dominio": requestBody.contrato_dominio,
                "contrato_data_desligamento": requestBody.contrato_data_desligamento,
                "contrato_distrato": requestBody.contrato_distrato,
                "contrato_faixa_salarial": requestBody.contrato_faixa_salarial,
                "contrato_plano_saude": requestBody.contrato_plano_saude,
                "contrato_vale_transporte": requestBody.contrato_vale_transporte,
                "contrato_vale_refeicao": requestBody.contrato_vale_refeicao,
                "contrato_vale_alimentacao": requestBody.contrato_vale_alimentacao,
                "contrato_auxilio_creche": requestBody.contrato_auxilio_creche,
                "contrato_type": requestBody.contrato_type,
                "contrato_data_adicao": requestBody.contrato_data_adicao,
            })
            .where(
                "contrato_id = :contrato_id", {
                contrato_id: requestBody.contrato_id
            })
            .execute()
        next()
    } catch (error) {
        res.json(error)
    }
}