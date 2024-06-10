// Client
import prismaClient from "../../prisma";

class ListResolutionService {
  async execute() {
    const resolutions = await prismaClient.resolution.findMany({
      select: {
        id: true,
        description: true,
        resolution_photo: true,
        tickets: true,
      },
    });

    return resolutions;
  }
}

export { ListResolutionService };
