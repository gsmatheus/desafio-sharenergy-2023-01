import { Client } from "src/domain/entities/client";

export class ClientViewModel {
  static toHTTP(client: Client) {
    return {
      id: client.id,
      fullName: client.fullName,
      document: client.document,
      documentType: client.documentType,
      email: client.email,
      phone: client.phone,
      profilePicture: client.profilePicture,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt
    }
  }

  static toHTTPWithAddress(client: Client) {
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
      address: client.address
    }
  }
}
