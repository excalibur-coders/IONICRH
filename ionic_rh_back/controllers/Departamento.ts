import { AppDataSource } from "../config/database";
import { Departamento } from "../models/empresa";

const departamentoRepository = AppDataSource.getRepository(Departamento);


export const getAllDepartamentos = async (req, res) => {
  try {
    const departamentos = await departamentoRepository.find({
      select: {
        dep_name: true,
      }
    });
    console.log(departamentos);
    res.json(departamentos);
  } catch (error) {
    res.json(error);
  }
}

export const getDepartamentoById = async (req, res) => {
  try {
    console.log(req.params.id);

    const departamento = await departamentoRepository.findOne({
      where: {
        dep_id: req.params.id
      }
    })
    console.log(departamento);
    res.json(departamento);
  } catch (error) {
    res.json(error);
  }
}
