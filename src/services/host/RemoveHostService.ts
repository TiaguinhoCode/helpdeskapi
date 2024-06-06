// Cliente
import prismaClient from "../../prisma";

class RemoveHostService {
  async execute(id: string) {
    const removeHost = await prismaClient.host.delete({
      where: {
        id,
      },
    });

    return removeHost;
  }
}

export { RemoveHostService };
