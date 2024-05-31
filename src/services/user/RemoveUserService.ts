// client
import prismaClient from "../../prisma";

class RemoveUserService {
    async execute(id: string) {
        const user = await prismaClient.user.findUnique({
            where: {
                id: id
            },
            select: {
                email: true
            }
        })

        if (user.email === 'adminti@helpdesk.com.br') {
            throw new Error("Não é permitido excluir o usuário administrador!");
        }

        const removeUser = await prismaClient.user.delete({
            where: {
                id: id
            }
        })


        return removeUser
    }
}

export { RemoveUserService }