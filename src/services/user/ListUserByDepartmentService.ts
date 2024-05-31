// Client
import prismaClient from "../../prisma";

// Tipagem
interface userDepartmentRequest {
    id: string
}

class ListUserByDepartmentService {
    async execute({ id }: userDepartmentRequest) {
        if (id === "") {
            throw new Error("Preencha o campo");
        }

        const existingDepartment = await prismaClient.department.findUnique({
            where: { id: id },
        });

        if (!existingDepartment) {
            throw new Error("Departamento não encontrado");
        }

        const users = await prismaClient.user.findMany({
            where: {
                department_id: id
            },
            select: {
                id: true,
                name: true,
                email: true,
                department: true,
                photo: true
            }
        })

        return users;
    }
}

export { ListUserByDepartmentService }