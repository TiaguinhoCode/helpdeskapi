// Servidor
import { Router, Request, Response } from "express";

// Controllers
import { CreateDepartmentController } from "./controllers/department/CreateDepartmentController";
import { ListDepartmentControllers } from "./controllers/department/ListDepartmentControllers";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailuserController } from "./controllers/user/DetailuserController";
import { ListUserController } from "./controllers/user/ListUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

// Middleware
import { isAutheticated } from "./middlewares/isAutheticated";
import { isAuthorized } from "./middlewares/isAuthorized";

const router = Router();

// Department
router.post('/create/department', isAutheticated, isAuthorized, new CreateDepartmentController().handle)
router.get('/departments', isAutheticated, isAuthorized, new ListDepartmentControllers().handle)

// Users
router.post('/create/user', isAutheticated, isAuthorized, new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAutheticated, new DetailuserController().handle)
router.get('/users', isAutheticated, isAuthorized, new ListUserController().handle)
router.put('/update/user', isAutheticated, new UpdateUserController().handle)

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' })
});

export { router };
