// Servidor
import { Request, Response } from "express";

// Service
import { UpdateResolutionService } from "../../services/resolution/UpdateResolutionService";

class UpdateResolutionController {
  async handle(req: Request, res: Response) {
    const { id, description, resolution_photo } = req.body;

    try {
      const updateResolutionService = new UpdateResolutionService();

      const updateResolution = await updateResolutionService.execute({
        id,
        description,
        resolution_photo,
      });

      return res.json({ message: "ok", resolution: updateResolution });
    } catch (err) {
      if (err.message === "Resolução não foi encontrada") {
        return res.status(404).json({ error: err.message });
      } else {
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }
}

export { UpdateResolutionController };
