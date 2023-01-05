import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateClientRequest, CreateClientUseCase } from "@domain/use-cases/client/create-client";
import { CreateClientBody } from "../dtos/client/create-client-body";
import { ClientViewModel } from "../view-models/client-view-model";
import { FindClientByIdUseCase } from "@domain/use-cases/client/get-client-by-id";
import { FindClientDto } from "../dtos/client/find-client-dto";
import { IExceptionConflict, IExceptionNotFound } from "@domain/exceptions/exceptions.interface";
import { FindEmailOrDocumentUseCase } from "@domain/use-cases/client/find-email-or-document";
import { UpdateClientBody } from "../dtos/client/update-client-body";
import { UpdateClientUseCase } from "@domain/use-cases/client/update-client";

@Controller('client')
export class ClientController {
  constructor(
    private createClientUseCase: CreateClientUseCase,
    private findClientByIdUseCase: FindClientByIdUseCase,
    private findEmailOrDocumentUseCase: FindEmailOrDocumentUseCase,
    private updateClientUseCase: UpdateClientUseCase,
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

  @Patch(':id')
  async update(@Param() idClient: FindClientDto, @Body() data: UpdateClientBody) {
    const { id } = idClient;
    const { fullName, document, documentType, email, phone, profilePicture } = data;

    const { client } = await this.findClientByIdUseCase.execute(
      { id }
    );

    if (!client) {
      throw new IExceptionNotFound('Client not found');
    }

    client.fullName = fullName || client.fullName;
    client.document = document || client.document;
    client.documentType = documentType || client.documentType;
    client.email = email || client.email;
    client.phone = phone || client.phone;
    client.profilePicture = profilePicture
    client.updatedAt = new Date();

    const { client: updatedClient } = await this.updateClientUseCase.execute(
      { client }
    );

    return {
      client: ClientViewModel.toHTTP(updatedClient)
    };
  }
}
