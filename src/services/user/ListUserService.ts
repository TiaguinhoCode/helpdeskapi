// Client
import prismaClient from "../../prisma";

class ListUserService {
    async execute() {
        const user = await prismaClient.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                department: true,
                photo: true
            }
        })

        return user
    }
}

export { ListUserService }