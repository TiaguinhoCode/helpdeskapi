// Servidor
import { Request, Response } from "express";

// Services
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, department_id } = req.body

        const createUserService = new CreateUserService()

        const user = await createUserService.execute({ name, email, password, department_id })

        return res.json({ message: 'Successfully created', user: user })
    }
}

export { CreateUserController }