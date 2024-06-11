// Servidor
import { Request, Response } from "express";

// Service
import { ListTicketService } from "../../services/ticket/ListTicketService";

class ListTicketController {
  async handle(req: Request, res: Response) {
    const listListTicketServiceTickets = new ListTicketService();

    const listTicktes = await listListTicketServiceTickets.execute();

    return res.json({ message: "ok", ticktes: listTicktes });
  }
}

export { ListTicketController };
