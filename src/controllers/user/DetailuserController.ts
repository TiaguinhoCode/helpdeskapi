// Servidor 
import { Request, Response } from "express";

// Service
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailuserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const detailUserService = new DetailUserService()

        const user = await detailUserService.execute(user_id)

        return res.json({ message: 'ok', user: user })
    }
}

export { DetailuserController }