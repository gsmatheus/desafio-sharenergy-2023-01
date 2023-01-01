import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { CreateClientUseCase } from "@domain/use-cases/client/create-client";
import { ClientController } from "./controllers/client.controller";
import { FindClientByIdUseCase } from "@domain/use-cases/client/get-client-by-id";

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    ClientController
  ],
  providers: [
    CreateClientUseCase,
    FindClientByIdUseCase
  ],
})
export class HttpModule { }
