import { Client } from "@domain/entities/client";
import { ClientRepository } from "@domain/repositories/client-repository";

export class InMemoryClientsRepository implements ClientRepository {
  public clients: Client[] = [];

  async create(client: Client): Promise<Client> {
    this.clients.push(client);

    return client;
  }
}
