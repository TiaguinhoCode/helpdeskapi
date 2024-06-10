// Servidor
import { Request, Response } from "express";

// Service
import { ListPriorityService } from "../../services/priority/ListPriorityService";

class listPriorityController {
  async handle(req: Request, res: Response) {
    const listPriorityService = new ListPriorityService();

    const listPriority = await listPriorityService.execute();

    return res.json({ message: "ok", prioritys: listPriority });
  }
}

export { listPriorityController };
