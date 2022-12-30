import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { CreateClientUseCase } from "src/domain/use-cases/client/create";
import { ClientController } from "./controllers/client.controller";

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    ClientController
  ],
  providers: [
    CreateClientUseCase
  ],
})
export class HttpModule { }
