import { Client } from "@domain/entities/client";
import { ClientAddress } from "@domain/entities/client-address";

export abstract class ClientRepository {
  abstract create(client: Client, clientAddress: ClientAddress): Promise<Client>;
  abstract findById(id: string): Promise<Client | undefined>;
  abstract findEmailOrDocument(email: string, document: string): Promise<Client | undefined>;
  abstract save(client: Client): Promise<Client>;
  abstract remove(id: string): Promise<void>;
}
