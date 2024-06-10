// Client
import prismaClient from "../../prisma";

// Tipagem
interface PriorityRequest {
  priority_level: string;
}

class CreatePriorityService {
  async execute({ priority_level }: PriorityRequest) {
    const existingPriority = await prismaClient.priority.findFirst({
      where: {
        priority_level: { equals: priority_level },
      },
    });

    if (existingPriority) {
      throw new Error("Essa prioridade ja foi criada");
    }

    const createPriority = await prismaClient.priority.create({
      data: {
        priority_level: priority_level,
      },
      select: {
        id: true,
        priority_level: true,
      },
    });

    return createPriority;
  }
}

export { CreatePriorityService };
