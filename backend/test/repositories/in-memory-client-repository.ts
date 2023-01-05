import { Client } from "@domain/entities/client";
import { ClientRepository } from "@domain/repositories/client-repository";

export class InMemoryClientsRepository implements ClientRepository {
  public clients: Client[] = [];

  async create(client: Client): Promise<Client> {
    this.clients.push(client);

    return client;
  }

  async findById(id: string): Promise<Client> {
    const client = this.clients.find((client) => client.id === id);

    if (!client) {
      throw new Error("Client not found");
    }

    return client;
  }

  async findEmailOrDocument(email: string, document: string): Promise<Client> {
    const client = this.clients.find(
      (client) => client.email === email || client.document === document
    );

    if (!client) {
      throw new Error("Client not found");
    }

    return client;
  }

  async save(client: Client): Promise<Client> {
    const clientIndex = this.clients.findIndex(
      (client) => client.id === client.id
    );

    this.clients[clientIndex] = client;

    return client;
  }

  async remove(id: string): Promise<void> {
    const clientIndex = this.clients.findIndex(
      (client) => client.id === client.id
    );

    if (clientIndex === -1) {
      throw new Error("Client not found");
    }

    this.clients.splice(clientIndex, 1);
  }
}
