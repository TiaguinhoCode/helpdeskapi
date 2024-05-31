// Client
import prismaClient from "../../prisma";

// Criptografia
import { hash } from "bcrypt";

// Tipagem 
interface recoveryPassword {
    id: string
    password: string
}

class RecoverPasswordService {
    async execute({ password, id }: recoveryPassword) {

        const userExists = await prismaClient.user.findUnique({
            where: { id }
        })

        if (!userExists) {
            throw new Error("Usuario nao encontrado");
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.update({
            where: { id },
            data: {
                password: passwordHash
            },
        })

        return user
    }
}

export { RecoverPasswordService }