import { makeClientWithAddress } from "@test/factories/client-factory";
import { InMemoryClientsRepository } from "@test/repositories/in-memory-client-repository";
import { CreateClientUseCase } from "./create-client";
import { FindEmailOrDocumentUseCase } from "./find-email-or-document";

describe('FindEmailOrDocument', () => {
  it('should be able to find a client by email or document', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const createClient = new CreateClientUseCase(clientRepository);
    const findEmailOrDocument = new FindEmailOrDocumentUseCase(clientRepository);

    const { client } = await createClient.execute(makeClientWithAddress());

    const clientByEmail = await findEmailOrDocument.execute({
      email: client.email,
      document: client.document,
    })

    expect(client.email).toEqual(clientByEmail.client.email);
    expect(client.document).toEqual(clientByEmail.client.document);
    expect(findEmailOrDocument.execute({
      email: 'any_email',
      document: 'any_document',
    })
    ).rejects.toThrow();
  });
});
