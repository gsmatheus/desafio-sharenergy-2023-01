import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateClientRequest, CreateClientUseCase } from "@domain/use-cases/client/create-client";
import { CreateClientBody } from "../dtos/client/create-client-body";
import { ClientViewModel } from "../view-models/client-view-model";
import { FindClientByIdUseCase } from "@domain/use-cases/client/get-client-by-id";
import { FindClientDto } from "../dtos/client/find-client-dto";

@Controller('client')
export class ClientController {
  constructor(
    private createClientUseCase: CreateClientUseCase,
    private findClientByIdUseCase: FindClientByIdUseCase
  ) { }

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

  @Get(':id')
  async get(@Param() idClient: FindClientDto) {
    const { id } = idClient;

    const { client } = await this.findClientByIdUseCase.execute(
      { id }
    );

    return {
      client: ClientViewModel.toHTTP(client)
    };
  }
}
