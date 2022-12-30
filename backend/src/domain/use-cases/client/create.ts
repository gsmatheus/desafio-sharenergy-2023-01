import { Injectable } from "@nestjs/common";
import { Client } from "src/domain/entities/client";
import { ClientAddress } from "src/domain/entities/client-address";
import { ClientRepository } from "src/domain/repositories/client-repository";

export interface CreateClientRequest {
  fullName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    number: string;
  }
}

@Injectable()
export class CreateClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) { }

  async execute(request: CreateClientRequest) {
    const { fullName, email, phone, address } = request;
    const client = new Client({
      fullName,
      email,
      phone,
      address: new ClientAddress({ ...address })
    });

    const clientCreated = await this.clientRepository.create(client);

    return { client: clientCreated };
  }
}
