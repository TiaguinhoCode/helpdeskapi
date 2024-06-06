// Client
import prismaClient from "../../prisma";

class ListHostService {
    async execute() {
        const hosts = await prismaClient.host.findMany({
            select: {
                id: true,
                host: true,
                processor: true,
                ram_memory: true,
                hdd: true,
                sdd: true,
                storage: true,
                system: true,
                switch: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        department: true,
                        photo: true
                    }
                }
            }
        })

        return hosts
    }
}

export { ListHostService }