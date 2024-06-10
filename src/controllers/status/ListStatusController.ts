// Servidor
import { Request, Response } from "express";

// Service
import { ListStatusService } from "../../services/status/ListStatusService";

class ListStatusController {
  async handle(req: Request, res: Response) {
    const listStatusService = new ListStatusService();

    const listStatus = await listStatusService.execute();

    return res.json({ message: "ok", hosts: listStatus });
  }
}

export { ListStatusController };
