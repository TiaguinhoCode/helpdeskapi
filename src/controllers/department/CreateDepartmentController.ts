// Servidor
import { Request, Response } from "express";

// Service
import { CreateDepartmentService } from "../../services/department/CreateDepartmentService";

class CreateDepartmentController {
    async handle(req: Request, res: Response) {
        const { sector } = req.body

        const createDepartmentService = new CreateDepartmentService()

        const department = await createDepartmentService.execute({ sector })

        return res.json({ message: 'Successfully created', department: department })
    }
}

export { CreateDepartmentController }