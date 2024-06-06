import prismaClient from "../../prisma";

// Tipagem
interface updateHost {
  id: string;
  host?: string;
  processor?: string;
  ram_memory?: string;
  hdd?: boolean;
  sdd?: boolean;
  storage?: string;
  system?: string;
  switch_network?: string;
  user_id?: string;
}

class UpdateHostService {
  async execute({
    id,
    host,
    processor,
    ram_memory,
    hdd,
    sdd,
    storage,
    system,
    switch_network,
    user_id,
  }: updateHost) {
    // console.log("Verificando usuário:", user_id);
    const userExists = await prismaClient.user.findUnique({
      where: { id: user_id },
    });

    if (user_id) {
      if (!userExists) {
        throw new Error("Usuario nao encontrado");
      }
    }

    // console.log("Verificando host:", id);
    const hostExists = await prismaClient.host.findUnique({
      where: { id },
    });

    if (!hostExists) {
      throw new Error("Host nao encontrado");
    }

    const data: any = {};
    if (host) data.host = host;
    if (processor) data.processor = processor;
    if (ram_memory) data.ram_memory = ram_memory;
    if (hdd !== undefined) data.hdd = hdd;
    if (sdd !== undefined) data.sdd = sdd;
    if (storage) data.storage = storage;
    if (system) data.system = system;
    if (switch_network) data.switch = switch_network;
    if (user_id) data.user_id = user_id;

    // console.log("Dados para atualização:", data);

    const hostUpdate = await prismaClient.host.update({
      where: {
        id: id,
      },
      data: data,
    });

    // console.log("Host atualizado com sucesso:", hostUpdate);

    return hostUpdate;
  }
}

export { UpdateHostService };
