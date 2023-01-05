import { makeClientWithAddress } from "@test/factories/client-factory";
import { InMemoryClientsRepository } from "@test/repositories/in-memory-client-repository";
import { CreateClientUseCase } from "./create-client";
import { UpdateClientUseCase } from "./update-client";

describe('UpdateClient', () => {
  it('should be able to update a client', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const createClient = new CreateClientUseCase(clientRepository);
    const updateClient = new UpdateClientUseCase(clientRepository);

    const { client } = await createClient.execute(makeClientWithAddress());

    client.fullName = 'New Name';
    client.document = 'New Document';
    const updatedClient = await updateClient.execute({ client })

    expect(updatedClient.client.fullName).toEqual('New Name');
    expect(updatedClient.client.document).toEqual('New Document');
  })
})
