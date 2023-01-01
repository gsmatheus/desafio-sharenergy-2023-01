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
      address: client.address && {
        id: client.address.id,
        street: client.address.street,
        number: client.address.number,
        city: client.address.city,
        state: client.address.state,
        country: client.address.country,
        zip: client.address.zip,
        createdAt: client.address.createdAt
      }
    } as Client;
  }
}
