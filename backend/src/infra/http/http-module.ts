import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { CreateClientUseCase } from "@domain/use-cases/client/create-client";
import { ClientController } from "./controllers/client.controller";
import { FindClientByIdUseCase } from "@domain/use-cases/client/get-client-by-id";
import { FindEmailOrDocumentUseCase } from "@domain/use-cases/client/find-email-or-document";
import { UpdateClientUseCase } from "@domain/use-cases/client/update-client";
import { DeleteClientUseCase } from "@domain/use-cases/client/delete-client";

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    ClientController
  ],
  providers: [
    CreateClientUseCase,
    FindClientByIdUseCase,
    FindEmailOrDocumentUseCase,
    UpdateClientUseCase,
    DeleteClientUseCase
  ],
})
export class HttpModule { }
