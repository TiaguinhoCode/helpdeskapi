// Servidor
import { Request, Response } from "express";

// Service
import { CreateTicketService } from "../../services/ticket/CreateTicketService";

class CreateTicketController {
  async handle(req: Request, res: Response) {
    const { problem_description, user_id, host_id } = req.body;
    const { filename: photo_problem } = req.file;

    try {
      const createTicketService = new CreateTicketService();

      const createTicket = await createTicketService.execute({
        host_id,
        problem_description,
        photo_problem,
        user_id,
      });

      return res.json({ message: "ok", ticket: createTicket });
    } catch (err) {
      if (err.message === "Usuario não existe") {
        return res.status(404).json({ error: err.message });
      } else if (err.message === "Host não existe") {
        return res.status(404).json({ error: err.message });
      } else {
        console.log(err.message);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }
}

export { CreateTicketController };
