import { Response, Request } from "express";

import { AppDataSource } from "config/database";
import { departamento } from "models/departamento";

const departamentoRepository = AppDataSource.getRepository(departamento);

export const getAllDepartamentos = async (req: Request, res: Response) => {
  try {
    const departamentos = await departamentoRepository.find({
      select: {
        dep_name: true,
      }
    });
    res.json(departamentos);
  } catch (error) {
    res.json(error);
  }
}

export const getDepartamentoById = async (req: Request, res: Response) => {
  try {
    const departamento = await departamentoRepository.findOne({
      where: {
        dep_id: Number(req.params.id)
      }
    })
    res.json(departamento);
  } catch (error) {
    res.json(error);
  }
}

export const createDepartamento = async (req: Request, res: Response) => {
  try {
    const dep = req.body;
    const dep_name = dep.dep_name;
    const departamento = await departamentoRepository.save(req.body);
    res.json({
      "message": `Departamento ${dep_name} criado`
    });
  } catch (error) {
    res.json(error);
  }
}

export const updateDepartamento = async (req: Request, res: Response) => {
  try {
    await departamentoRepository
      .createQueryBuilder()
      .update(departamento).
      set({
        "dep_name": req.body.dep_name
      })
      .where(
        "dep_id = :dep_id", {
        dep_id: req.params.id
      }).
      execute();
    res.json({
      "message": `Departamento foi atualizado com sucesso`
    });
  } catch (error) {
    res.json(error);
  }
}

export const deleteDepartamento = async (req: Request, res: Response) => {
  try {
    await departamentoRepository
      .createQueryBuilder()
      .delete()
      .from(departamento)
      .where(
        "dep_id = :dep_id", {
        dep_id: req.params.id
      })
      .execute();
    res.json({
      "message": "Departamento deletado com sucesso"
    })
  } catch (error) {

  }
}
