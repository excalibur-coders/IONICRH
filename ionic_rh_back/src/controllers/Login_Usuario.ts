import { Response, Request } from "express";

import 'config/dotenv';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { AppDataSource } from "config/database";
import { user } from "models/user";

const userReposiroty = AppDataSource.getRepository(user);

export const loginUser = async (req: Request, res: Response) => {
    const { user_email, password } = req.body
    const user = await userReposiroty.find({
        where: {
            user_email
        }
    })
    if (user.length == 1) {
        if (await bcrypt.compare(password, user[0].password as string)) {
            const token = jwt.sign({ id: user[0].user_id }, process.env.APP_SECRET as string, {
                expiresIn: '1D'
            })
            const data = {
                ...user[0],
                token
            }
            return res.json(data);
        } else {
            return res.status(404).json({ message: "Senha incorreta" })
        }
    } else {
        return res.status(404).json({ message: "E-mail incorreto" })
    }
}