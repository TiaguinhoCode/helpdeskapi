// Servidor
import { Request, Response } from "express";

// Service
import { ListDetailUserService } from "../../services/user/ListDetailUserService";

class ListDetailUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;

    if (typeof id !== "string") {
      return res.status(400).json({ error: "ID do usuario inválido" });
    }

    const listDetailUserService = new ListDetailUserService();

    const user = await listDetailUserService.execute(id);

    return res.json({ message: "ok", user: user });
  }
}

export { ListDetailUserController };
