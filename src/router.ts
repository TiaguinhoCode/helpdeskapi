// Servidor
import { Router, Request, Response } from "express";

// Controllers
import { CreateDepartmentController } from "./controllers/department/CreateDepartmentController";
import { ListDepartmentControllers } from "./controllers/department/ListDepartmentControllers";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAutheticated } from "./middlewares/isAutheticated";
import { DetailuserController } from "./controllers/user/DetailuserController";

const router = Router();

// Department
router.post('/create/department', isAutheticated, new CreateDepartmentController().handle)
router.get('/departments', isAutheticated, new ListDepartmentControllers().handle)

// Users
router.post('/create/user', isAutheticated, new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', new DetailuserController().handle)

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' })
});

export { router };
