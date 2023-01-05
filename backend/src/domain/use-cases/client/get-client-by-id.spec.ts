import { makeClientWithAddress } from "@test/factories/client-factory";
import { InMemoryClientsRepository } from "@test/repositories/in-memory-client-repository";
import { randomUUID } from "crypto";
import { CreateClientUseCase } from "./create-client";
import { FindClientByIdUseCase } from "./get-client-by-id";

describe('GetClientById', () => {
  it('should be able to get a client by id', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const createClient = new CreateClientUseCase(clientRepository);
    const getClientById = new FindClientByIdUseCase(clientRepository);

    const { client } = await createClient.execute(makeClientWithAddress());

    const clientById = await getClientById.execute({
      id: client.id
    })

    expect(clientRepository.clients).toHaveLength(1);
    expect(clientById.client.id).toEqual(client.id);
  });

  it('should not be able to get a client by id if it does not exist', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const getClientById = new FindClientByIdUseCase(clientRepository);

    await expect(
      getClientById.execute({
        id: randomUUID()
      })
    ).rejects.toThrow();
  });
});
