// Servidor
import { NextFunction, Request, Response } from "express";

// Client
import prismaClient from "../prisma";


export async function isAuthorized(req: Request, res: Response, next: NextFunction) {
    const userId = req.user_id

    if (!userId) {
        return res.status(401).json({ message: "Authorization failed", error: "O id do usuario não encontrado" })
    }

    try {
        const user = await prismaClient.user.findUnique({
            where: { id: userId },
            include: { department: true }
        })

        if (!user) {
            return res.status(404).json({ message: "User não encontrado" })
        }

        if (user.department.sector !== "T.I") {
            return res.status(403).json({ message: "Acesso negado!" })
        }

        return next()
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
}