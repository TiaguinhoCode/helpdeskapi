// Servidor
import { Request, Response } from "express";

// Service
import { CreateStatusService } from "../../services/status/CreateStatusService";

class CreateStatusController {
  async handle(req: Request, res: Response) {
    const { status } = req.body;

    try {
      const createStatusService = new CreateStatusService();

      const createStatus = await createStatusService.execute({
        status,
      });

      return res.json({ message: "ok", status: createStatus });
    } catch (err) {
      if (err.message === "Não pode criar status reptidos") {
        return res.status(404).json({ error: err.message });
      } else {
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }
}

export { CreateStatusController };
