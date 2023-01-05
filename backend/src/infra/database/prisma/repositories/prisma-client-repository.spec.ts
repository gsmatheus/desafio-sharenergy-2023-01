import { makeClientAddress } from "@test/factories/client-address-factory";
import { makeClient } from "@test/factories/client-factory";
import { PrismaService } from "../prisma.service";
import { PrismaClientRepository } from "./prisma-client-repository";

describe('PrismaClientRepository', () => {
  it('should be able to create a new client', async () => {
    const prisma = new PrismaService();
    const prismaClientRepository = new PrismaClientRepository(prisma);

    const client = await prismaClientRepository.create(makeClient(
      { id: undefined, address: makeClientAddress() }
    ));

    expect(client).toBeTruthy();
  });

  it('should be able to get a client by id', async () => {
    const prisma = new PrismaService();
    const prismaClientRepository = new PrismaClientRepository(prisma);

    const client = await prismaClientRepository.create(makeClient(
      { id: undefined, address: makeClientAddress() }
    ));

    const clientById = await prismaClientRepository.findById(client.id);

    expect(clientById).toBeTruthy();
    expect(clientById.id).toEqual(client.id);
  });

  it('should not be able to get a client by id if it does not exist', async () => {
    const prisma = new PrismaService();
    const prismaClientRepository = new PrismaClientRepository(prisma);

    await expect(
      prismaClientRepository.findById('invalid-id')
    ).rejects.toThrow();
  });

});
