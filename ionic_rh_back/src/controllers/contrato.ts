import { AppDataSource } from "config/database";
import { contrato } from "models/contrato";
import { Request, Response, NextFunction } from "express";
import { IContrato } from "interfaces/IContrato";
import { IUser } from "interfaces/IUser";
import { user } from "models/user";

const contratoRepository = AppDataSource.getRepository(contrato)
const userRepository = AppDataSource.getRepository(user)

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
            contrato_adimissao,
            contrato_faixa_salarial,
            contrato_plano_saude,
            contrato_vale_transporte,
            contrato_nivel,
            contrato_vale_refeicao,
            contrato_vale_alimentacao,
            contrato_auxilio_creche,
            contrato_tipo
        } = req.body
        const {
            id
        } = req.params
        req.body.userUserId = id
        await contratoRepository
            .createQueryBuilder()
            .insert()
            .into(contrato)
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
        const requestUser: IUser = req.body
        const {
            id
        } = req.params
        req.params.userUserId = id

        await contratoRepository
            .createQueryBuilder()
            .update(contrato)
            .set ({
                "contrato_adimissao": requestBody.contrato_adimissao,
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
                "contrato_tipo": requestBody.contrato_tipo,
                "cargoCargoId": requestBody.cargoCargoId,
                "contrato_nivel": requestBody.contrato_nivel

            })
            .where(
                "userUserId = :userUserId", 
                {
                    userUserId: id
                }
            )
            .createQueryBuilder()
            .update(user)
            .set({
                "user_role": requestUser.user_role 
            })
            .where(
                "user_id = :user_id", 
                {
                    user_id: id
                }
            )
            .execute()
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}