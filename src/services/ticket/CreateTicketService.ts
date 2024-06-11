// Cliente
import prismaClient from "../../prisma";

// Tipagem
interface TicketRequest {
  problem_description: string;
  photo_problem?: string;
  user_id: string;
  host_id: string;
}

class CreateTicketService {
  async execute({
    host_id,
    problem_description,
    user_id,
    photo_problem,
  }: TicketRequest) {
    // Obtenha o status inicial
    const startedStatus = await prismaClient.status.findFirst({
      where: {
        id: "a9b3a3f1-76b0-466d-b0b1-064bbe3ff2d1",
      },
    });

    // Verifique se o usuário existe
    const userExisting = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    if (!userExisting) {
      throw new Error("Usuario não existe");
    }

    // Verifique se o host existe
    const hostExisting = await prismaClient.host.findFirst({
      where: {
        id: host_id,
      },
    });

    if (!hostExisting) {
      throw new Error("Host não existe");
    }

    // Crie o ticket
    const createTicket = await prismaClient.ticket.create({
      data: {
        problem_description: problem_description,
        user_id: user_id,
        host_id: host_id,
        status_id: startedStatus.id,
        photo_problem: photo_problem,
      },
      select: {
        id: true,
        problem_description: true,
        photo_problem: true,
        status: {
          select: {
            status: true,
          },
        },
        oppening_date: true,
        service_date: true,
        closing_date: true,
        priority: { 
          select: { 
            priority_level: true 
          } 
        },
        technician: true,
        host: {
          select: {
            host: true,
            processor: true,
            ram_memory: true,
            hdd: true,
            sdd: true,
            storage: true,
            system: true,
            switch: true,
          },
        },
        user: {
          select: {
            email: true,
            name: true,
            photo: true,
            department: {
              select: { sector: true },
            },
          },
        },
      },
    });

    return createTicket;
  }
}

export { CreateTicketService };
