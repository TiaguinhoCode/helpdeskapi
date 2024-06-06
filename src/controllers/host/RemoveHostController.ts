// Servidor
import { Request, Response } from "express";

// Service
import { RemoveHostService } from "../../services/host/RemoveHostService";

class RemoveHostController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const removeHostService = new RemoveHostService();

    const removeHost = await removeHostService.execute(id);

    return res.json({
      message: "host removido com sucesso!",
      host: removeHost,
    });
  }
}

export { RemoveHostController };
