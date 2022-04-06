import { Response, Request } from "express";

import { AppDataSource } from "config/database";
import { Acesso } from "models/acesso_sistema";

const acesso_sistemaRepository = AppDataSource.getRepository(Acesso);

export const getAllAcesso = async (req: Request, res: Response) => {
    try {
      const acesso = await acesso_sistemaRepository.find({
        select: {
          acesso_cargo: true,
        }
      });
      res.json(acesso);
    } catch (error) {
      res.json(error);
    }
  }
export const getAcessoById = async (req: Request, res: Response) => {
    try {
        const acesso = await acesso_sistemaRepository.findOne({
            where: {
                acesso_id: req.params.id
            }
        });
        res.json(acesso);
    } catch (error) {
        res.json(error);
    }
}
export const createAcesso = async (req: Request, res: Response) => {
    try {
        const acesso_sistema = req.body;
        const acesso_cargo = acesso_sistema.acesso_cargo;
        const acesso = await acesso_sistemaRepository.save(req.body);
        res.json({
            "Message": `O Acesso ${acesso_cargo} foi criado`
        });
    } catch (error) {
        res.json(error);
    }
}
export const updateAcesso = async (req: Request, res: Response) => {
    try {
        await acesso_sistemaRepository
            .createQueryBuilder()
            .update(Acesso)
            .set({
                "acesso_cargo": req.body.acesso_cargo
            }).where("acesso_id = :acesso_id", { acesso_id: req.params.id }).execute();
        res.json({
            "message": `O Acesso foi atualizado com sucesso`
        });
    } catch (error) {
        res.json(error);
    }
}
export const deleteAcesso = async(req: Request, res: Response) => {
    try {
        await acesso_sistemaRepository
        .createQueryBuilder()
        .delete()
        .from(Acesso)
        .where("acesso_id = :acesso_id",{acesso_id:req.params.id})
        .execute()
        res.json({
            "message":"Acesso deletado com sucesso"
        })
    } catch (error) {
        res.json(error);
    }
}
