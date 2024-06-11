// Servidor
import { Request, Response } from "express";

// Service
import { RemoveTicketService } from "../../services/ticket/RemoveTicketService";

class RemoveTicketController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const removeTicketService = new RemoveTicketService();

    const removeTicket = await removeTicketService.execute(id);

    return res.json({
      message: "Ticket removido com sucesso!",
      ticket: removeTicket,
    });
  }
}

export { RemoveTicketController };
