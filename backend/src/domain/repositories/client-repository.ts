import { Client } from "../entities/client";

export abstract class ClientRepository {
  abstract create(client: Client): Promise<Client>;
}
