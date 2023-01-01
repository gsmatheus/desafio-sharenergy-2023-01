import { Client } from "@domain/entities/client";
import { ClientRepository } from "@domain/repositories/client-repository";

export class InMemoryClientsRepository implements ClientRepository {
  findById(id: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
  public clients: Client[] = [];

  async create(client: Client): Promise<Client> {
    this.clients.push(client);

    return client;
  }
}
