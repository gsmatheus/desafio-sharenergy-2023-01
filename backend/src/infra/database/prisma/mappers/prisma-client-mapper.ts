import { Client as RawClient } from "@prisma/client";
import { Client } from "src/domain/entities/client";

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

  static toDomain(raw: RawClient): Client {
    return {
      id: raw.id,
      fullName: raw.fullName,
      email: raw.email,
      phone: raw.phone,
      profilePicture: raw.profilePicture,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      addressId: raw.addressId,
    } as Client;
  }
}
