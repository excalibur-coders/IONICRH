import { AppDataSource } from 'config/database';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { user } from 'models/user';
import { TypedRequestBody } from 'interfaces/IRequest'
import '../config/dotenv';
import { IUser } from 'interfaces/IUser';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'Token is required!'
        })
    }
    const [, token] = authHeader.split(' ')

    try {
        await jwt.verify(token, process.env.APP_SECRET as string)
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Token is invalid!'
        })
    }
}
interface IDecodedParams {
    id: string;
    exp: string,
    iat: string
}
export function verifyUserRole(roles: string[]) {
    async function UserRoles(req: Request, res: Response, next: NextFunction) {
        const tokenHeader = req.headers.authorization;

        const splitToken = tokenHeader?.split(' ')[1] as string;

        const decodedJwt = jwtDecode<IDecodedParams>(splitToken);

        const userReposiroty = AppDataSource.getRepository(user)
        const userRole = await userReposiroty.findOne({
            where: {
                user_id: Number(decodedJwt.id)
            }
        }) as unknown as IUser
        if (!roles.includes(userRole.user_role[0])) {
            return res.status(406).json({
                message: "Você não  tem permisão"
            })
        }
        next()
    }
    return UserRoles
}