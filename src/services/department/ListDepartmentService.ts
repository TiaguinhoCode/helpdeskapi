// Client
import prismaClient from "../../prisma";

class ListDepartmentService {
    async execute() {
        const department = await prismaClient.department.findMany({
            select: {
                id: true,
                sector: true
            }
        })

        return department
    }
}

export { ListDepartmentService }