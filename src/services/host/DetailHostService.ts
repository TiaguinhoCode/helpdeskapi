// Cliente
import prismaClient from "../../prisma";

// Tipagem
interface hostRequest {
  id?: string;
}

class DetailHostService {
  async execute({ id }: hostRequest) {
    const host = await prismaClient.host.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        host: true,
        processor: true,
        ram_memory: true,
        hdd: true,
        sdd: true,
        storage: true,
        switch: true,
        system: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            photo: true,
            department: { select: { sector: true } },
          },
        },
      },
    });

    return host;
  }
}

export { DetailHostService };
