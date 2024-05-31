// Servidor
import { Request, Response } from "express";

// Service
import { CreateDepartmentService } from "../../services/department/CreateDepartmentService";

class CreateDepartmentController {
    async handle(req: Request, res: Response) {
        const { sector } = req.body

        const createDepartmentService = new CreateDepartmentService()

        try {
            const department = await createDepartmentService.execute({ sector })

            return res.json({ message: 'Successfully created', department: department })

        } catch (err) {
            if (err.message === "Departamento já existe") {
                return res.status(404).json({ error: err.message });
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }

    }
}

export { CreateDepartmentController }