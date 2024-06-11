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
import { RecoverPasswordController } from "./controllers/user/RecoverPasswordController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { ListUserByDepartmentController } from "./controllers/user/ListUserByDepartmentController";
import { ListTechnicianController } from "./controllers/technician/ListTechnicianController";
import { RemoveDepartmentController } from "./controllers/department/RemoveDepartmentController";
import { CreateHostController } from "./controllers/host/CreateHostController";
import { ListHostController } from "./controllers/host/ListHostController";
import { UpdateHostController } from "./controllers/host/UpdateHostController";
import { DetailHostController } from "./controllers/host/DetailHostController";
import { RemoveHostController } from "./controllers/host/RemoveHostController";
import { CreateStatusController } from "./controllers/status/CreateStatusController";
import { ListStatusController } from "./controllers/status/ListStatusController";
import { CreatePriorityController } from "./controllers/priority/CreatePriorityController";
import { listPriorityController } from "./controllers/priority/ListPriorityController";
import { CreateResolutionController } from "./controllers/resolution/CreateResolutionController";
import { ListResolutionController } from "./controllers/resolution/ListResolutionController";
import { UpdateResolutionController } from "./controllers/resolution/UpdateResolutionController";
import { RemoveResolutionController } from "./controllers/resolution/RemoveResolutionController";

// Middleware
import { isAutheticated } from "./middlewares/isAutheticated";
import { isAuthorized } from "./middlewares/isAuthorized";
import { CreateTicketController } from "./controllers/ticket/CreateTicketController";

const router = Router();

// Department
router.post('/create/department', isAutheticated, isAuthorized, new CreateDepartmentController().handle)
router.get('/departments', isAutheticated, isAuthorized, new ListDepartmentControllers().handle)
router.delete('/delete/department', isAutheticated, isAuthorized, new RemoveDepartmentController().handle)

// Users
router.post('/create/user', isAutheticated, isAuthorized, new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAutheticated, new DetailuserController().handle)
router.get('/users', isAutheticated, isAuthorized, new ListUserController().handle)
router.get('/users/department', isAutheticated, isAuthorized, new ListUserByDepartmentController().handle)
router.put('/update/user', isAutheticated, new UpdateUserController().handle)
router.put('/recover/user', isAutheticated, new RecoverPasswordController().handle)
router.delete('/delete/user', isAutheticated, isAuthorized, new RemoveUserController().handle)

// Tecnico
router.get('/technician', isAutheticated, new ListTechnicianController().handle)

// Hosts
router.post('/create/host', isAutheticated, isAuthorized, new CreateHostController().handle)
router.get('/host', isAutheticated, isAuthorized, new ListHostController().handle)
router.get('/detail/host', isAutheticated, new DetailHostController().handle)
router.put('/update/host', isAutheticated, isAuthorized, new UpdateHostController().handle)
router.delete('/delete/host', isAutheticated, isAuthorized, new RemoveHostController().handle)

// Status
router.post('/create/status', isAutheticated, isAuthorized, new CreateStatusController().handle)
router.get('/status', isAutheticated, new ListStatusController().handle)

// Priority
router.post('/create/priority', isAutheticated, isAuthorized, new CreatePriorityController().handle)
router.get('/priority', isAutheticated, new listPriorityController().handle)

// Resolution
router.post('/create/resolution', isAutheticated, isAuthorized, new CreateResolutionController().handle)
router.get('/resolution', isAutheticated, new ListResolutionController().handle)
router.put('/update/resolution', isAutheticated, isAuthorized, new UpdateResolutionController().handle)
router.delete('/delete/resolution', isAutheticated, isAuthorized, new RemoveResolutionController().handle)

// Ticket
router.post('/create/ticket', isAutheticated, new CreateTicketController().handle)

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' })
});

export { router };
