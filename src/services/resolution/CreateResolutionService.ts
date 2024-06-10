// Client
import prismaClient from "../../prisma";

// Tipagem
interface resolutionRequest {
  description: string;
  resolution_photo?: string;
}

class CreateResolutionService {
  async execute({ description, resolution_photo }: resolutionRequest) {
    const createResolution = await prismaClient.resolution.create({
      data: {
        description: description,
        resolution_photo: resolution_photo,
      },
      select: {
        id: true,
        description: true,
        resolution_photo: true,
      },
    });

    return createResolution;
  }
}

export { CreateResolutionService };
