// Servidor
import { Request, Response } from "express";

// Service
import { RemoveResolutionService } from "../../services/resolution/RemoveResolutionService";

class RemoveResolutionController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const removeResolutionService = new RemoveResolutionService();

    const removeResolution = await removeResolutionService.execute(id);

    return res.json({ message: "ok", resolution: removeResolution });
  }
}

export { RemoveResolutionController };
