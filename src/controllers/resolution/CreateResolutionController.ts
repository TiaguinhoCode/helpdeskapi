// Servidor
import { Request, Response } from "express";

// Service
import { CreateResolutionService } from "../../services/resolution/CreateResolutionService";

class CreateResolutionController {
  async handle(req: Request, res: Response) {
    const { description, resolution_photo } = req.body;

    const createResolutionService = new CreateResolutionService();

    const createResolution = await createResolutionService.execute({
      description,
      resolution_photo,
    });

    return res.json({ message: "ok", resolution: createResolution });
  }
}

export { CreateResolutionController };
