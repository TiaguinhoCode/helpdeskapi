// Servidor
import { Router, Request, Response } from "express";

// Controllers
import { CreateDepartmentController } from "./controllers/department/CreateDepartmentController";
import { ListDepartmentControllers } from "./controllers/department/ListDepartmentControllers";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

// Department
router.post('/create/department', new CreateDepartmentController().handle)
router.get('/departments', new ListDepartmentControllers().handle)

// Users
router.post('/create/user', new CreateUserController().handle)

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' })
});

export { router };
