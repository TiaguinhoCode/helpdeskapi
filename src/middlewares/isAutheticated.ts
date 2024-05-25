// Servidor 
import { NextFunction, Request, Response } from "express";

// Biblioteca
import { verify } from "jsonwebtoken";

// Tipagem
interface payLoad {
    sub: string;
}

export function isAutheticated(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as payLoad

        // REcupera id do token e colocar dentro de um req
        req.user_id = sub

        return next()
    } catch (err) {
        return res.status(401).end()
    }

    return next()
}