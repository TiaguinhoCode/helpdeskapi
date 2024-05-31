// Servidor 
import { Request, Response } from "express";

// Service 
import { ListTechnicianServices } from "../../services/technician/ListTechnicianServices";

class ListTechnicianController {
    async handle(req: Request, res: Response) {
        const listTechnicianServices = new ListTechnicianServices()

        const technical = await listTechnicianServices.execute()

        return res.json({ message: 'ok', technician: technical })
    }
}

export { ListTechnicianController }