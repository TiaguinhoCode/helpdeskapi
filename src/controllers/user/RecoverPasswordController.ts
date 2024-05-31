// Servidor 
import { Request, Response } from "express";

// Service
import { RecoverPasswordService } from "../../services/user/RecoverPasswordService";

class RecoverPasswordController {
    async handle(req: Request, res: Response) {
        const { password, id } = req.body

        if (password === "" || id === "") {
            return res.json({ message: 'Insira algum valor' })
        }

        const recoverPasswordService = new RecoverPasswordService()

        try {
            await recoverPasswordService.execute({
                id,
                password
            });
            return res.json({ message: 'Senha alterada com sucesso!' });
        } catch (err) {
            if (err.message === "Usuario nao encontrado") {
                return res.status(404).json({ error: err.message });
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    }
}

export { RecoverPasswordController }