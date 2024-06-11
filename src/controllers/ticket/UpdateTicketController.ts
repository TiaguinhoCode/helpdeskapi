// Servidor
import { Request, Response } from "express";

// Service
import { UpdateTicketService } from "../../services/ticket/UpdateTicketService";

class UpdateTicketController {
  async handle(req: Request, res: Response) {
    const {
      id,
      closing_date,
      priority_id,
      problem_description,
      resolution_description,
      resolution_id,
      service_date,
      status_id,
      technician,

    } = req.body;

    try {
      const updateTicketService = new UpdateTicketService();

      const updateResolution = await updateTicketService.execute({
        id,
        closing_date,
        priority_id,
        problem_description,
        resolution_description,
        resolution_id,
        service_date,
        status_id,
        technician,
      });

      return res.json({
        message: "Ticket alterado com sucesso!",
        ticket: updateResolution,
      });
    } catch (err) {
      if (err.message === "Ticket não foi encontrada") {
        return res.status(404).json({ error: err.message });
      } else if (err.message === "Resolução não foi encontrada") {
        return res.status(404).json({ error: err.message });
      } else if (err.message === "Prioridade não foi encontrada") {
        return res.status(404).json({ error: err.message });
      } else if (err.message === "Status não foi encontrada") {
        return res.status(404).json({ error: err.message });
      } else {
        console.log(err.message)
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }
}

export { UpdateTicketController };
