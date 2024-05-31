// Servidor
import { Request, Response } from "express";

// Services
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, department_id } = req.body

        const createUserService = new CreateUserService()

        try {
            const user = await createUserService.execute({ name, email, password, department_id })

            return res.json({ message: 'Successfully created', user: user })
        } catch (err) {
            if (err.message === "Email incorreto!") {
                return res.status(404).json({ error: err.message });
            } 
            else if (err.message === "Usuario já existe") {
                return res.status(404).json({ error: err.message });
            }
            else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }

    }
}

export { CreateUserController }