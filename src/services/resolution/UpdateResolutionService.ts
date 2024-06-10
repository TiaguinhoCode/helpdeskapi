// Client
import prismaClient from "../../prisma";

// Tipagem
interface updateResolution {
  id: string;
  description?: string;
  resolution_photo?: string;
}

class UpdateResolutionService {
  async execute({ id, description, resolution_photo }: updateResolution) {
    const resolutionExists = await prismaClient.resolution.findUnique({
      where: { id: id },
    });

    if (!resolutionExists) {
      throw new Error("Resolução não foi encontrada");
    }

    const data: any = {};
    if (description) data.description = description;
    if (resolution_photo) data.resolution_photo = resolution_photo;

    const resolutionUpdate = await prismaClient.resolution.update({
      where: {
        id: id,
      },
      data: data,
    });

    return resolutionUpdate
  }
}

export { UpdateResolutionService };
