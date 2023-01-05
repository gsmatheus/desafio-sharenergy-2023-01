import { Client as RawClient } from "@prisma/client";
import { Client } from "src/domain/entities/client";
import { Address as RawAddress } from "@prisma/client"
import { ClientAddress } from "@domain/entities/client-address";
import { Replace } from "@helpers/replace";

interface toDomainResponse {
  client: Replace<Client, { address?: ClientAddress }>;
}

export class PrismaClientMapper {

  static toPrisma(client: Client) {
    return {
      id: client.id,
      fullName: client.fullName,
      document: client.document,
      documentType: client.documentType,
      email: client.email,
      phone: client.phone,
      profilePicture: client.profilePicture,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    }
  }

  static toPrismaWithAddress(client: Client, clientAddress: ClientAddress) {
    return {
      id: client.id,
      fullName: client.fullName,
      document: client.document,
      documentType: client.documentType,
      email: client.email,
      phone: client.phone,
      profilePicture: client.profilePicture,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
      address: {
        create: {
          street: clientAddress.street,
          number: clientAddress.number,
          city: clientAddress.city,
          state: clientAddress.state,
          country: clientAddress.country,
          zip: clientAddress.zip,
        }
      }
    }
  }

  static toDomain(raw: RawClient) {
    return {
      id: raw.id,
      fullName: raw.fullName,
      document: raw.document,
      documentType: raw.documentType,
      email: raw.email,
      phone: raw.phone,
      profilePicture: raw.profilePicture,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt
    } as Client;
  }

  static toDomainWithAddress(raw: RawClient & { address: RawAddress[] }) {
    return {
      id: raw.id,
      fullName: raw.fullName,
      document: raw.document,
      documentType: raw.documentType,
      email: raw.email,
      phone: raw.phone,
      profilePicture: raw.profilePicture,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      address: raw.address
    } as Client;
  }
}
