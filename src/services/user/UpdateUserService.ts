// Client
import prismaClient from "../../prisma";

// Tipagem
interface updateUser {
    id: string,
    name?: string,
    email?: string,
    department_id?: string,
    photo?: string
}

class UpdateUserService {
    async execute({ id, name, email, department_id, photo }: updateUser) {

        const userExists = await prismaClient.user.findUnique({
            where: { id }
        })

        if (!userExists) {
            throw new Error("Usuario nao encontrado");
        }

        if (department_id) {
            const existingDepartment = await prismaClient.department.findUnique({
                where: { id: department_id },
            });

            if (!existingDepartment) {
                throw new Error("Departamento não encontrado");
            }
        }

        const data: any = {};
        if (name) data.name = name;
        if (email) data.email = email;
        if (department_id) data.department_id = department_id;
        if (photo) data.photo = photo;

        const user = await prismaClient.user.update({
            where: {
                id: id
            },
            data: data
        });

        return user
    }
}

export { UpdateUserService }