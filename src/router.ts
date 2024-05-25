// Servidor
import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' })
});

router.post('/', (req: Request, res: Response) => {
    const { name } = req.body

    res.json({ message: 'ok', retorno: name })
});

export { router };
