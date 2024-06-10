// Client
import prismaClient from "../../prisma";

class ListStatusService {
  async execute() {
    const status = await prismaClient.status.findMany({
      select: {
        id: true,
        status: true,
      },
    });

    return status;
  }
}

export { ListStatusService };
