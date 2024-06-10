//  Client
import prismaClient from "../../prisma";

// Tipagem
interface StatusRequest {
  status: string;
}

class CreateStatusService {
  async execute({ status }: StatusRequest) {
    const existingStatus = await prismaClient.status.findFirst({
      where: {
        status: { equals: status },
      },
    });

    if (existingStatus) {
      throw new Error("Não pode criar status reptidos");
    }

    const createStatus = await prismaClient.status.create({
      data: {
        status: status,
      },
      select: {
        id: true,
        status: true,
      },
    });

    return createStatus
  }
}

export { CreateStatusService };
