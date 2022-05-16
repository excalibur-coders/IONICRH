import { Response, Request } from "express";

import * as bcrypt from 'bcrypt'
import { AppDataSource } from "config/database";
import { user } from "models/user";

const userReposiroty = AppDataSource.getRepository(user);

export const cadastro = async (req: Request, res: Response) => {
    const { user_email, password, user_nome } = req.body
    const passwordHash = await bcrypt.hash(password, 8)
    const user = await userReposiroty.create({
        user_nome,
        user_email,
        password: passwordHash,
    })
    await userReposiroty.save(user)
    delete user.password
    res.json(user);
};
