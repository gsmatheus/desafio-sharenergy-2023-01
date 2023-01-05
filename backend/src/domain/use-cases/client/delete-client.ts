import { ClientRepository } from "@domain/repositories/client-repository";
import { Injectable } from "@nestjs/common";

interface DeleteClientRequest {
  id: string;
}

@Injectable()
export class DeleteClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) { }

  async execute(request: DeleteClientRequest): Promise<void> {
    const { id } = request;

    await this.clientRepository.remove(id);
  }
}
