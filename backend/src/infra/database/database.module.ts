import { Module } from "@nestjs/common";
import { ClientRepository } from "src/domain/repositories/client-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaClientRepository } from "./prisma/repositories/prisma-client-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository
    }
  ],
  exports: [
    ClientRepository
  ]
})
export class DatabaseModule { }
