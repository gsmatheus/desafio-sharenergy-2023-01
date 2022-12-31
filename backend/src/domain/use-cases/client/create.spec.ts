import { makeClient } from "@test/factories/client-factory";
import { InMemoryClientsRepository } from "@test/repositories/in-memory-client-repository";
import { CreateClientUseCase } from "./create";

describe('CreateClient', () => {
  it('should be able to create a new client', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const createClient = new CreateClientUseCase(clientRepository);

    const { client } = await createClient.execute(makeClient());
    console.log(client);

    expect(client).toBeTruthy();
    expect(clientRepository.clients).toContain(client);
  });
});
