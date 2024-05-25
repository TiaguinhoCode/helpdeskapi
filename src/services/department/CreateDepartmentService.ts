// Client
import prismaClient from "../../prisma/index"

// Tipagem
interface DepartmentRequest {
    sector: string;
}

class CreateDepartmentService {
    async execute({ sector }: DepartmentRequest) {

        const departmentExists = await prismaClient.department.findFirst({
            where: {
                sector: sector
            }
        })

        if (departmentExists) {
            throw new Error("Departamento já existe")
        }

        const department = await prismaClient.department.create({
            data: {
                sector: sector
            },
            select: {
                id: true,
                sector: true
            }
        })

        return department
    }
}

export { CreateDepartmentService }