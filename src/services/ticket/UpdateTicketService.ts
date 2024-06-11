// Client
import prismaClient from "../../prisma";

// Tipagem
interface UpdateTicketRequest {
  id: string;
  priority_id?: string;
  technician?: string;
  status_id?: string;
  problem_description?: string;
  resolution_id?: string;
  resolution_description?: string;
  service_date?: Date;
  closing_date?: Date;
}

class UpdateTicketService {
  async execute({
    id,
    priority_id,
    problem_description,
    resolution_description,
    resolution_id,
    status_id,
    technician,
    closing_date,
    service_date,
  }: UpdateTicketRequest) {
    const ticketExists = await prismaClient.ticket.findUnique({
      where: { id: id },
    });

    if (!ticketExists) {
      throw new Error("Ticket não foi encontrado");
    }

    if (resolution_id) {
      const resolutionExists = await prismaClient.resolution.findUnique({
        where: { id: resolution_id },
      });

      if (!resolutionExists) {
        throw new Error("Resolução não foi encontrada");
      }
    }

    if (priority_id) {
      const priorityExists = await prismaClient.priority.findUnique({
        where: { id: priority_id },
      });

      if (!priorityExists) {
        throw new Error("Prioridade não foi encontrada");
      }
    }

    if (status_id) {
      const statusExists = await prismaClient.status.findUnique({
        where: { id: status_id },
      });

      if (!statusExists) {
        throw new Error("Status não foi encontrado");
      }
    }

    const dataTicket: any = {};
    if (priority_id) dataTicket.priority_id = priority_id;
    if (problem_description)
      dataTicket.problem_description = problem_description;
    if (technician) dataTicket.technician = technician;
    if (status_id) dataTicket.status_id = status_id;
    if (service_date) dataTicket.service_date = new Date(service_date);
    if (closing_date) dataTicket.closing_date = new Date(closing_date);

    if (resolution_description) {
      const dataResolution: any = {
        description: resolution_description, 
      };

      // Atualize a resolução
      if (resolution_id) {
        await prismaClient.resolution.update({
          where: {
            id: resolution_id,
          },
          data: dataResolution,
        });
      }
    }

    // Atualize o ticket
    const ticketUpdate = await prismaClient.ticket.update({
      where: {
        id: id,
      },
      data: dataTicket,
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

    return ticketUpdate;
  }
}

export { UpdateTicketService };
