import { Client } from "@domain/entities/client";
import { ClientRepository } from "@domain/repositories/client-repository";
import { Injectable } from "@nestjs/common";

interface FindClientByIdRequest {
  id: string;
}

interface FindClientByIdResponse {
  client: Client;
}

@Injectable()
export class FindClientByIdUseCase {
  constructor(private readonly clientRepositoy: ClientRepository) { }

  async execute(
    request: FindClientByIdRequest
  ): Promise<FindClientByIdResponse> {
    const { id } = request;

    const client = await this.clientRepositoy.findById(id);

    return { client };
  }
}
