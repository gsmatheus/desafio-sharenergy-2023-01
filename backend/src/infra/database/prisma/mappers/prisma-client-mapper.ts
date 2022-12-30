import { Client as RawClient } from "@prisma/client";
import { Client } from "src/domain/entities/client";

export class PrismaClientMapper {
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
