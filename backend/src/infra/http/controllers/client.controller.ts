import { Body, Controller, Post } from "@nestjs/common";
import { CreateClientRequest, CreateClientUseCase } from "src/domain/use-cases/client/create";
import { CreateClientBody } from "../dtos/client/create-client-body";
import { ClientViewModel } from "../view-models/client-view-model";

@Controller('client')
export class ClientController {
  constructor(private createClientUseCase: CreateClientUseCase) { }

  @Post()
  async create(@Body() data: CreateClientBody) {
    const { fullName, email, phone, address } = data;

    const request: CreateClientRequest = {
      fullName,
      email,
      phone,
      address
    };

    const { client } = await this.createClientUseCase.execute(request);

    return {
      client: ClientViewModel.toHTTP(client)
    };
  }
}
