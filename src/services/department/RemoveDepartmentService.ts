// Client
import prismaClient from "../../prisma";

class RemoveDepartmentService {
    async execute(id: string) {
        const department = await prismaClient.department.findUnique({
            where: {
                id: id
            },
            select: {
                sector: true
            }
        })

        if (department.sector === 'T.I') {
            throw new Error("Não é permitido excluir setor de T.I!")
        }

        const removeDepartment = await prismaClient.department.delete({
            where: {
                id: id
            }
        })

        return removeDepartment
    }
}

export { RemoveDepartmentService }