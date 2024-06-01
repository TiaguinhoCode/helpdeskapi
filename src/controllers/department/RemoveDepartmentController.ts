// Servidor
import { Request, Response } from "express";

// Service
import { RemoveDepartmentService } from "../../services/department/RemoveDepartmentService";

class RemoveDepartmentController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string

        try {
            const removeDepartmentService = new RemoveDepartmentService()


            const removeDepartment = await removeDepartmentService.execute(
                id
            )

            return res.json({ message: 'Departamento removido com sucesso!' })
        } catch (err) {
            if (err.message === "Não é permitido excluir setor de T.I!") {
                return res.status(404).json({ error: err.message });
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    }
}

export { RemoveDepartmentController }