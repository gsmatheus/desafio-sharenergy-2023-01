import { Client } from "src/domain/entities/client";

export class ClientViewModel {
  static toHTTP(client: Client) {
    return {
      id: client.id,
      fullName: client.fullName,
      email: client.email,
      phone: client.phone,
      profilePicture: client.profilePicture,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
      addressId: client.addressId,
    } as Client;
  }
}
