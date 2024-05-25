// Servidor
import { Request, Response } from "express";

// Service
import { ListDepartmentService } from "../../services/department/ListDepartmentService";

class ListDepartmentControllers {
    async handle(req: Request, res: Response) {
        const listDepartmentService = new ListDepartmentService()

        const department = await listDepartmentService.execute()

        return res.json({ message: 'ok', departments: department })
    }
}

export { ListDepartmentControllers }