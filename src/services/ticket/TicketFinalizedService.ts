// Client
import prismaClient from "../../prisma";

// Tipagem
interface TicketFinalizedRequest {
  id: string;
  description: string;
}

class TicketFinalizedService {
  async execute({ id, description }: TicketFinalizedRequest) {
    const startedStatus = await prismaClient.status.findFirst({
      where: {
        id: "3ecf9ba9-0360-4338-81aa-8350a64e0e96",
      },
    });

    const currentDate = new Date().toISOString();

    const createResolution = await prismaClient.resolution.create({
      data: {
        description: description,
      },
    });

    const ticketFinalized = await prismaClient.ticket.update({
      where: {
        id: id,
      },
      data: {
        status_id: startedStatus.id,
        resolution_id: createResolution.id,
        closing_date: currentDate,
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

    return ticketFinalized;
  }
}

export { TicketFinalizedService };
