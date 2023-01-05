import { makeClientWithAddress } from "@test/factories/client-factory";
import { InMemoryClientsRepository } from "@test/repositories/in-memory-client-repository";
import { randomUUID } from "crypto";
import { CreateClientUseCase } from "./create-client";
import { DeleteClientUseCase } from "./delete-client";

describe('DeleteClient', () => {
  it('should be able to delete a client', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const createClient = new CreateClientUseCase(clientRepository);
    const deleteClient = new DeleteClientUseCase(clientRepository);

    const { client } = await createClient.execute(makeClientWithAddress());

    await deleteClient.execute({
      id: client.id
    })

    expect(clientRepository.clients).toHaveLength(0);
  });

  it('should not be able to delete a client if it does not exist', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const deleteClient = new DeleteClientUseCase(clientRepository);

    await expect(
      deleteClient.execute({
        id: 'invalid-id'
      })
    ).rejects.toThrow();
  });
});
