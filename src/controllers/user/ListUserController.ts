// Servidor 
import { Request, Response } from "express";

// Servidor
import { ListUserService } from "../../services/user/ListUserService"; 

class ListUserController {
    async handle(req: Request, res: Response) {
        const listUserService = new ListUserService()

        const users = await listUserService.execute()

        return res.json({ message: 'ok', users: users })
    }
}

export {ListUserController}