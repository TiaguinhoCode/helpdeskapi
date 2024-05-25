// Servidor
import { Router, Request, Response } from "express";

// Controllers
import { CreateDepartmentController } from "./controllers/department/CreateDepartmentController";

const router = Router();

// Department
router.post('/create/department', new CreateDepartmentController().handle)

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' })
});

router.post('/', (req: Request, res: Response) => {
    const { name } = req.body

    res.json({ message: 'ok', retorno: name })
});

export { router };
