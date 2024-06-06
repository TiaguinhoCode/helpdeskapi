// Servidor
import { Request, Response } from "express";

// Service
import { CreateHostService } from "../../services/host/CreateHostService";

class CreateHostController {
    async handle(req: Request, res: Response) {
        const { host, processor, ram_memory, storage, switchRede, system, user_id, hdd, sdd } = req.body

        try {
            const createHostService = new CreateHostService()

            const createHost = await createHostService.execute({
                host,
                processor,
                ram_memory,
                storage,
                switchRede,
                system,
                user_id,
                hdd,
                sdd
            })

            return res.json({ message: 'ok', host: createHost })
        } catch (err) {
            if (err.message === "Usuario não existe") {
                return res.status(404).json({ error: err.message });
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    }
}

export { CreateHostController }