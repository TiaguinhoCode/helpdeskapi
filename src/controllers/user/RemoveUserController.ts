// Servidor
import { Request, Response } from "express";

// Service
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string

        try {
            const removeUserService = new RemoveUserService()

            const removeUser = await removeUserService.execute(
                id
            )

            return res.json({ message: 'Usuario removido com sucesso!' })
        } catch (err) {
            if (err.message === "Não é permitido excluir o usuário administrador!") {
                return res.status(404).json({ error: err.message });
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    }
}

export { RemoveUserController }