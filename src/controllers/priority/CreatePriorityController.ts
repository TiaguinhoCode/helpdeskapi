// Servirdor
import { Request, Response } from "express";

// Service
import { CreatePriorityService } from "../../services/priority/CreatePriorityService";

class CreatePriorityController {
  async handle(req: Request, res: Response) {
    const { priority_level } = req.body;

    try {
      const createPriorityService = new CreatePriorityService();

      const createPriority = await createPriorityService.execute({
        priority_level,
      });

      return res.json({ message: "ok", priority: createPriority });
    } catch (err) {
      if (err.message === "Essa prioridade ja foi criada") {
        return res.status(404).json({ error: err.message });
      } else {
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }
}

export { CreatePriorityController };
