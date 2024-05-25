// Servidor
import { Request, Response } from "express";

// Services
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const authUserService = new AuthUserService()

        const auth = await authUserService.execute({ email, password })

        if (auth.success) {
            res.status(200).json({ message: 'Authorization success', user: auth.user });
        } else {
            res.status(401).json({ message: 'Authorization failed', error: auth.message });
        }
    }
}

export { AuthUserController }