// Servidor 
import { Request, Response } from "express";

// Service
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id, name, email, department_id, photo } = req.body

        const updateUserService = new UpdateUserService()

        const updateUser = await updateUserService.execute({
            id,
            name,
            department_id,
            email,
            photo
        })

        return res.json({ message: 'ok', user: updateUser })
    }
}

export { UpdateUserController }