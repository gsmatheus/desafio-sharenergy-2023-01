import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateClientRequest, CreateClientUseCase } from "@domain/use-cases/client/create-client";
import { CreateClientBody } from "../dtos/client/create-client-body";
import { ClientViewModel } from "../view-models/client-view-model";
import { FindClientByIdUseCase } from "@domain/use-cases/client/get-client-by-id";
import { FindClientDto } from "../dtos/client/find-client-dto";
import { IExceptionConflict, IExceptionNotFound } from "@domain/exceptions/exceptions.interface";
import { FindEmailOrDocumentUseCase } from "@domain/use-cases/client/find-email-or-document";

@Controller('client')
export class ClientController {
  constructor(
    private createClientUseCase: CreateClientUseCase,
    private findClientByIdUseCase: FindClientByIdUseCase,
    private findEmailOrDocumentUseCase: FindEmailOrDocumentUseCase
  ) { }

  @Post()
  async create(@Body() data: CreateClientBody) {
    const { fullName, document, documentType, email, phone, address } = data;

    const accountRegistered = await this.findEmailOrDocumentUseCase.execute({ email, document });

    if (accountRegistered.client) {
      throw new IExceptionConflict('Email ou CPF já cadastrados');
    }

    const request: CreateClientRequest = {
      fullName,
      document,
      documentType,
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
      client: ClientViewModel.toHTTPWithAddress(client)
    };
  }
}
