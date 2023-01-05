import { ClientRepository } from "@domain/repositories/client-repository";
import { Injectable } from "@nestjs/common";
import { Client } from "@prisma/client";

interface FindEmailOrDocumentRequest {
  email: string;
  document: string;
}

interface FindEmailOrDocumentResponse {
  client: Client;
}

@Injectable()
export class FindEmailOrDocumentUseCase {
  constructor(private readonly clientRepository: ClientRepository) { }

  async execute(
    request: FindEmailOrDocumentRequest
  ): Promise<FindEmailOrDocumentResponse> {
    const { email, document } = request;

    const client = await this.clientRepository.findEmailOrDocument(email, document);

    return { client };
  }
}
