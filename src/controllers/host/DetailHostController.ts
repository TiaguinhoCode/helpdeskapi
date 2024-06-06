// Servidor
import { Request, Response } from "express";

// Service
import { DetailHostService } from "../../services/host/DetailHostService";

class DetailHostController {
  async handle(req: Request, res: Response) {
    const { id, user_id } = req.query;

    if (typeof id !== "string") {
      return res.status(400).json({ error: "ID do departamento inválido" });
    }

    const detailHostService = new DetailHostService();

    const detailHost = await detailHostService.execute({ id });

    return res.json({ message: "ok", host: detailHost });
  }
}

export { DetailHostController };
