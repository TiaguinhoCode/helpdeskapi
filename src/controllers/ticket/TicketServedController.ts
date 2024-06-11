// Servidor
import { Request, Response } from "express";

// Service
import { TicketServedService } from "../../services/ticket/TicketServedService";

class TicketServedController {
  async handle(req: Request, res: Response) {
    const { id, priority_id, technician } = req.body;

    const ticketServedService = new TicketServedService();

    const ticketServed = await ticketServedService.execute({
      id,
      priority_id,
      technician,
    });

    return res.json({ message: "Ticket Alterado", host: ticketServed });
  }
}

export { TicketServedController };
