// Servidor
import { Request, Response } from "express";

// Service
import { TicketFinalizedService } from "../../services/ticket/TicketFinalizedService";

class TicketFinalizedController {
  async handle(req: Request, res: Response) {
    const { id, description } = req.body;
    const { filename: resolution_photo } = req.file;

    const ticketFinalizedService = new TicketFinalizedService();

    const ticketFinalized = await ticketFinalizedService.execute({
      id,
      description,
      resolution_photo
    });

    return res.json({ message: "Ticket finalizado", ticket: ticketFinalized });
  }
}

export { TicketFinalizedController };
