// Servidor 
import { Request, Response } from "express";

// Service
import { ListHostService } from "../../services/host/ListHostService";

class ListHostController {
    async handle(req: Request, res: Response) {
        const listHostService = new ListHostService()

        const listHosts = await listHostService.execute()

        return res.json({ message: 'ok', hosts: listHosts })
    }
}

export { ListHostController }