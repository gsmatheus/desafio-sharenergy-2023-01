import { Client } from "@domain/entities/client";
import { ClientRepository } from "@domain/repositories/client-repository";
import { Injectable } from "@nestjs/common";

interface UpdateClientRequest {
  client: Client;
}

interface UpdateClientResponse {
  client: Client;
}

@Injectable()
export class UpdateClientUseCase {

  constructor(private readonly clientRepository: ClientRepository) { }

  async execute(request: UpdateClientRequest): Promise<UpdateClientResponse> {
    const { client } = request;

    const updatedClient = await this.clientRepository.save(client);

    return { client: updatedClient };
  }
}
