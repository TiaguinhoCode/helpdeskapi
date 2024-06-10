// Client
import prismaClient from "../../prisma";

class ListPriorityService {
  async execute() {
    const priority = await prismaClient.priority.findMany({
      select: {
        id: true,
        priority_level: true,
      },
    });

    return priority;
  }
}

export { ListPriorityService };
