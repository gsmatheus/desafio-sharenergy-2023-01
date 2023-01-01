import { Client as RawClient } from "@prisma/client";
import { Client } from "src/domain/entities/client";
import { Address as RawAddress } from "@prisma/client"

export class PrismaClientMapper {

  static toPrisma(client: Client) {
    return {
      fullName: client.fullName,
      email: client.email,
      phone: client.phone,
      profilePicture: client.profilePicture,
      address: {
        create: {
          street: client.address.street,
          number: client.address.number,
          city: client.address.city,
          state: client.address.state,
          country: client.address.country,
          zip: client.address.zip,
        }
      }
    }
  }

  static toDomain(raw: RawClient, rawAddress?: RawAddress): Client {
    return {
      id: raw.id,
      fullName: raw.fullName,
      email: raw.email,
      phone: raw.phone,
      profilePicture: raw.profilePicture,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      addressId: raw.addressId,
      address: rawAddress && {
        id: rawAddress.id,
        street: rawAddress.street,
        number: rawAddress.number,
        city: rawAddress.city,
        state: rawAddress.state,
        country: rawAddress.country,
        zip: rawAddress.zip,
        createdAt: rawAddress.createdAt
      }
    } as Client;
  }
}
