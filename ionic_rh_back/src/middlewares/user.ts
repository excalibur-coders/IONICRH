import { Response, Request, NextFunction } from "express";
import { TypedRequestBody } from "interfaces/IRequest";
import { AppDataSource } from "config/database";
import { USER } from "models/user"
import { IUser } from "interfaces/IUser";

interface ILoginData {
  user_email: string;
  password: string;
}

const userReposiroty = AppDataSource.getRepository(USER);

export const verifyRegisterRequestValues = (
  req: TypedRequestBody<ILoginData & { user_nome: string }>, 
  res: Response, 
  next: NextFunction
) => {
  
  if (!req.body.user_nome) {
    res.status(406).json({
      message: 'Está faltando o campo do nome'
    })
  }

  if (!req.body.user_email) {
    res.status(406).json({
      message: 'Está faltando o campo do e-mail'
    })
  }

  if (!req.body.password) {
    res.status(406).json({
      message: 'Está faltando o campo da senha'
    })
  }

  next();
}

export const verifyUpdateRequestValues = (
  req: TypedRequestBody<IUser>, 
  res: Response, 
  next: NextFunction
) => {
  if (!req.body.user_nome)
    res.status(406).json({
      message: 'Está faltando o campo nome'
    }); 
  if (!req.body.user_cpf)
    res.status(406).json({
      message: 'Está faltando o campo cpf'
    }); 
  if (!req.body.user_naturalidade)
    res.status(406).json({
      message: 'Está faltando o campo naturalidade'
    }); 
  if (!req.body.user_nascimento)
    res.status(406).json({
      message: 'Está faltando o campo nascimento'
    }); 
  if (!req.body.user_genero)
    res.status(406).json({
      message: 'Está faltando o campo genêro'
    }); 
  if (!req.body.user_estado_civil)
    res.status(406).json({
      message: 'Está faltando o campo estado civil'
    }); 

  next();
}

export const verifyUsedCpf = async (
  req: TypedRequestBody<IUser>, 
  res: Response, 
  next: NextFunction
) => {
  const { user_cpf } = req.body;
  const userExist = await userReposiroty.findOne({
    where: {
      user_cpf
    }
  });

  if (userExist)
    return res.status(400).json({ message: "CPF em uso" });

  next();
}

export const verifyUserExistsByEmail = async (
  req: TypedRequestBody<{ user_email: string }>,
  res: Response,
  next: NextFunction
) => {
  const { user_email } = req.body;
  const userExist = await userReposiroty.findOne({
    where: {
      user_email
    }
  });

  if (userExist)
    return res.status(400).json({ message: "Email em uso" });

  next();
}

export const verifyLoginRequestValues = (
  req: TypedRequestBody<ILoginData>, 
  res: Response, 
  next: NextFunction
) => {
  
  if (!req.body.user_email) {
    res.status(406).json({
      message: 'Está faltando o campo do e-mail'
    })
  }

  if (!req.body.password) {
    res.status(406).json({
      message: 'Está faltando o campo da senha'
    })
  }

  next();
}

export const verifyValidEmail = async (
  req: TypedRequestBody<{ user_email: string }>,
  res: Response,
  next: NextFunction
) => {
  const { user_email } = req.body;
  const userExist = await userReposiroty.findOne({
    where: {
      user_email
    }
  });

  if (!userExist)
    return res.status(400).json({ message: "Email incorreto." });

  next();
}
