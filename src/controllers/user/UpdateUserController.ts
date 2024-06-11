// Servidor 
import { Request, Response } from "express";

// Service
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id, name, email, department_id } = req.body
        const { filename: photo } = req.file;

        const updateUserService = new UpdateUserService()

        try {
            const updateUser = await updateUserService.execute({
                id,
                name,
                department_id,
                email,
                photo
            })

            return res.json({ message: 'ok', user: updateUser })
        } catch (err) {
            if (err.message === "Usuario nao encontrado") {
                return res.status(404).json({ error: err.message });
            } else if (err.message === "Departamento não encontrado") {
                return res.status(404).json({ error: err.message });
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    }
}

export { UpdateUserController }