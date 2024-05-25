// Cliente
import prismaClient from "../../prisma";

// Biblioteca
import { hash } from "bcrypt"

// Tipagem
interface userRequest {
    name: string;
    email: string;
    password: string;
    department_id: string;
}

class CreateUserService {
    async execute({ name, email, password, department_id }: userRequest) {

        if (!email) {
            throw new Error("Email incorreto!")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Usuario já existe")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                department_id: department_id
            },
            select: {
                id: true,
                name: true,
                email: true,
                department_id: true
            }
        })

        return user
    }
}

export { CreateUserService }