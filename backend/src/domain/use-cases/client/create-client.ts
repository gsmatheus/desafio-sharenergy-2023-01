import { Injectable } from "@nestjs/common";
import { Client } from "@domain/entities/client";
import { ClientAddress } from "@domain/entities/client-address";
import { ClientRepository } from "@domain/repositories/client-repository";
import { DocumentType } from "@prisma/client";

export interface CreateClientRequest {
  id?: string;
  fullName: string;
  document: string;
  documentType: DocumentType;
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
    const {
      id, fullName, document, documentType, email, phone, address
    } = request;

    const client = await this.clientRepository.create(
      new Client({
        id: id || undefined,
        fullName,
        email,
        phone,
        document,
        documentType,
      }),
      new ClientAddress({
        street: address.street,
        city: address.city,
        state: address.state,
        country: address.country,
        zip: address.zip,
        number: address.number,
      }),
    );

    return { client };
  }
}
