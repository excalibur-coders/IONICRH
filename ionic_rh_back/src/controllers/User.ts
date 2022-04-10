import { verify } from "jsonwebtoken";
import jwtDecode from "jwt-decode";

import { Response, Request, response } from "express";

import { AppDataSource } from "config/database";
import { IUser } from "interfaces/IUser";
import { USER } from "models/user"
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import 'config/dotenv';

interface IDecodedParams {
  id: string;
  exp: string,
  iat: string
}

const userReposiroty = AppDataSource.getRepository(USER);

// Register User
export const CadastroUser = async (req: Request, res: Response) => {

  const { user_email, password, user_nome } = req.body

  const passwordHash = await bcrypt.hash(password, 8)

  const userExist = await userReposiroty.findOne({
    where: {
      user_email
    }
  });

  if (userExist) {
    return res.status(400).json({ message: "Email em uso" })
  } else {
    const user = await userReposiroty.create({
      user_nome,
      user_email,
      password: passwordHash,
    })

    await userReposiroty.save(user)
    
    delete user.password

    res.json(user);
  }

};

// Login User
export const loginUser = async (req: Request, res: Response) => {

  const { user_email, password } = req.body

  const user = await userReposiroty.find({
    where: {
      user_email
    }
  })

  if (user.length == 1) {
    if (await bcrypt.compare(password, user[0].password as string)) {
      const token = jwt.sign({ id: user[0].user_id }, process.env.APP_SECRET, {
        expiresIn: '1D'
      })
 
      const data = {
        ...user[0],
        token
      }

      return res.json(data);

    } else {
      return res.status(404).json({ message: "User not found" })
    }
  } else {
    return res.status(404).json({ message: "User not found" })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const tokenHeader = req.headers.authorization;

    const splitToken = tokenHeader?.split(' ')[1] as string;

    const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

    const requestBody: IUser = req.body;

    await userReposiroty
      .createQueryBuilder()
      .update(USER)
      .set({
        "user_id": requestBody.user_id,
        "user_nome": requestBody.user_nome,
        "user_cpf": requestBody.user_cpf,
        "user_naturalidade": requestBody.user_naturalidade,
        "user_nascimento": requestBody.user_nascimento,
        "user_genero": requestBody.user_genero,
        "user_estado_civil": requestBody.user_estado_civil,
      })
      .where("user_id = :user_id", { user_id: decodedJwt.id })
      .execute();

      res.json(req.body);

  } catch (error) {
    res.json(error);
  }
};

// Route ADMIN
export const getAllUser = async (req: Request, res: Response) => {
  try {
    const userQuery = await userReposiroty.createQueryBuilder("USER").execute()
    res.json(userQuery)
  } catch (err) {
    res.json(req.body)
  }
}
