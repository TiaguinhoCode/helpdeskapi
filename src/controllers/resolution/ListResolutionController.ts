// Servidor
import { Request, Response } from "express";

// Service
import { ListResolutionService } from "../../services/resolution/ListResolutionService";

class ListResolutionController {
  async handle(req: Request, res: Response) {
    const listResolutionsService = new ListResolutionService();

    const listResolutions = await listResolutionsService.execute();

    return res.json({ message: "ok", resolutions: listResolutions });
  }
}

export { ListResolutionController };
