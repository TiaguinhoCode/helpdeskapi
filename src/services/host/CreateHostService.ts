// Client
import prismaClient from "../../prisma/index"

// Tipagem 
interface HostRequest {
    host: string,
    processor: string,
    ram_memory: string,
    hdd?: boolean,
    sdd?: boolean,
    storage: string,
    system: string,
    switchRede: string,
    user_id: string
}

class CreateHostService {
    async execute({ host, processor, ram_memory, storage, system, user_id, hdd, sdd, switchRede }: HostRequest) {
        const userExists = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        if (!userExists) {
            throw new Error("Usuario não existe")
        }

        const createHost = await prismaClient.host.create({
            data: {
                host: host,
                processor: processor,
                ram_memory: ram_memory,
                storage: storage,
                system: system,
                hdd: hdd,
                sdd: sdd,
                switch: switchRede,
                user_id: user_id
            },
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
                        photo: true,
                        department: true
                    }
                }
            }
        })

        return createHost
    }
}

export { CreateHostService }