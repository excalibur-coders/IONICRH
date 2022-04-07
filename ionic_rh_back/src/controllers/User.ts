import { Response, Request } from "express";

import { AppDataSource } from "config/database";
import { IUser } from "interfaces/IUser";
import { USER } from "models/user"

const userReposiroty = AppDataSource.getRepository(USER);

export const createUser = async (req: Request, res: Response) => {
  try {
    await userReposiroty.save(req.body);

    res.json(req.body);
  } catch (error) {
    res.json(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const requestBody: IUser = req.body;

    await userReposiroty
      .createQueryBuilder()
      .update(USER)
      .set({
        "user_nome": requestBody.user_nome,
        "user_cpf": requestBody.user_cpf,
        "user_naturalidade": requestBody.user_naturalidade,
        "user_nascimento": requestBody.user_nascimento,
        "user_genero": requestBody.user_genero,
        "user_estado_civil": requestBody.user_estado_civil,
      })
      .where("user_id = :user_id", { user_id: requestBody.user_id })
      .execute();

      res.json(req.body);
  } catch (error) {
    res.json(req.body);
  }
};

// Route ADMIN
export const readUser = async (req : Request, res:Response)=>{
  try{
    let userQuery = await userReposiroty.createQueryBuilder("USER").execute()
    console.log(userQuery.user_id)
    res.json(userQuery)
  } catch(err) {
    res.json(req.body)
  }
}

export const loginUser = async (req: Request, res:Response)=>{
  try{
    let userQuery = await userReposiroty.createQueryBuilder("USER")
    .where("user_email = :user_email", {user_email: req.body.user_email})
    .andWhere("password = :password", {password: req.body.password})
    .execute()
    console.log(userQuery[0].USER_user_id)
    res.json(userQuery)
} catch(error){
  res.json(error)
}}