// Client
import prismaClient from "../../prisma";

// Tipagem
interface TicketServedRequest {
  id: string;
  priority_id: string;
  technician: string;
}

class TicketServedService {
  async execute({ id, priority_id, technician }: TicketServedRequest) {
    const startedStatus = await prismaClient.status.findFirst({
      where: {
        id: "84096807-7559-433a-97a9-d02bef0adf04",
      },
    });

    const currentDate = new Date().toISOString();

    const ticketServed = await prismaClient.ticket.update({
      where: {
        id: id,
      },
      data: {
        service_date: currentDate,
        technician: technician,
        priority_id: priority_id,
        status_id: startedStatus.id
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

    return ticketServed;
  }
}

export { TicketServedService };
