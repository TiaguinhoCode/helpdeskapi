// Servidor
import { Request, Response } from "express";

// Service
import { UpdateHostService } from "../../services/host/UpdateHostService";

class UpdateHostController {
  async handle(req: Request, res: Response) {
    const {
      id,
      host,
      processor,
      ram_memory,
      hdd,
      sdd,
      storage,
      switch_network,
      system,
      user_id,
    } = req.body;

    try {
    //   console.log("Dados recebidos:", req.body);

      const updateHostService = new UpdateHostService();

      const updateHost = await updateHostService.execute({
        id,
        host,
        processor,
        ram_memory,
        sdd,
        hdd,
        storage,
        switch_network,
        system,
        user_id,
      });

    //   console.log("Host atualizado:", updateHost);

      return res.json({ message: "ok", host: updateHost });
    } catch (err) {
    //   console.error("Erro ao atualizar host:", err);

      if (err.message === "Usuario nao encontrado") {
        return res.status(404).json({ error: err.message });
      } else if (err.message === "Host nao encontrado") {
        return res.status(404).json({ error: err.message });
      } else {
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }
}

export { UpdateHostController };
