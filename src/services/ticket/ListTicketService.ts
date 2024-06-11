// Client
import prismaClient from "../../prisma";

class ListTicketService {
  async execute() {
    const tickets = await prismaClient.ticket.findMany({
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
        priority: true,
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
        resolution: {
          select: {
            id: true,
            description: true,
            resolution_photo: true,
          },
        },
        user: {
          select: {
            name: true,
            email: true,
            photo: true,
            department: {
              select: {
                sector: true,
              },
            },
          },
        },
      },
    });

    return tickets;
  }
}

export { ListTicketService };
