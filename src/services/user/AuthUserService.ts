// Client
import prismaClient from "../../prisma";

// Biblioteca
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken'

// Tipagem
interface authRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: authRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                department_id: true,
                photo: true,
                department: true
            }
        })


        if (!user) {
            return {
                success: false,
                message: "E-mail ou senha incorreto"
            }
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            return {
                success: false,
                message: "E-mail ou senha incorreto"
            };
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                token: token,
                department: user.department,
                photo: user.photo
            }
        };
    }
}

export { AuthUserService }