import { makeClientWithAddress } from "@test/factories/client-factory";
import { InMemoryClientsRepository } from "@test/repositories/in-memory-client-repository";
import { CreateClientUseCase } from "./create-client";

describe('CreateClient', () => {
  it('should be able to create a new client', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const createClient = new CreateClientUseCase(clientRepository);

    const { client } = await createClient.execute(makeClientWithAddress());

    expect(client).toBeTruthy();
    expect(clientRepository.clients).toContain(client);
  });
});
