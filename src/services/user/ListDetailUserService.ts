// Cliente
import prismaClient from "../../prisma";

class ListDetailUserService {
  async execute(id: string) {
    const user = await prismaClient.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true,
        department: true,
        photo: true,
      },
    });

    return user;
  }
}

export { ListDetailUserService };
