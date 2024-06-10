// Cliente
import prismaClient from "../../prisma";

class RemoveResolutionService {
  async execute(id: string) {
    const removeResolution = await prismaClient.resolution.delete({
      where: {
        id,
      },
    });

    return removeResolution;
  }
}

export { RemoveResolutionService };
