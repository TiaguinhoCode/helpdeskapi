// Servidor 
import { Request, Response } from "express";

// Service
import { ListUserByDepartmentService } from "../../services/user/ListUserByDepartmentService";

class ListUserByDepartmentController {
    async handle(req: Request, res: Response) {
        const { id } = req.query;

        if (typeof id !== 'string') {
            return res.status(400).json({ error: 'ID do departamento inválido' });
        }

        try {
            const listUserBuDepartment = new ListUserByDepartmentService()

            const listUser = await listUserBuDepartment.execute({ id })

            return res.json({ message: 'ok', user: listUser })
        } catch (error) {
            if (error.message === "Preencha o campo") {
                return res.status(404).json({ error: error.message });
            } else if (error.message === "Departamento não encontrado") {
                return res.status(404).json({ error: error.message });
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    }
}

export { ListUserByDepartmentController }