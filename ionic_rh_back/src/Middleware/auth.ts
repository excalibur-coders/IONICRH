import { AppDataSource } from 'config/database';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { Acesso } from 'models/acesso_sistema';
import { USER } from 'models/user';
import '../config/dotenv';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Token is required!' })
    }
    const [, token] = authHeader.split(' ')

    try {
        await jwt.verify(token, process.env.APP_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Token is invalid!' })
    }
}