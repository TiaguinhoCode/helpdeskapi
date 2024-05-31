// Client 
import prismaClient from "../../prisma";

class ListTechnicianServices {
    async execute() {
        const user = await prismaClient.user.findMany({
            where: {
                department_id: "5953de49-17a4-40c1-a0df-8d2474a0e735"
            },
            select: {
                id: true,
                email: true,
                name: true,
                department: true,
                photo: true
            }
        })

        return user
    }
}

export { ListTechnicianServices }