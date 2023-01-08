import { UserRepository } from "@domain/repositories/user-repository";
import { Module } from "@nestjs/common";
import { ClientRepository } from "src/domain/repositories/client-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaClientRepository } from "./prisma/repositories/prisma-client-repository";
import { PrismaUserRepository } from "./prisma/repositories/prisma-user-repositoty";

@Module({
  providers: [
    PrismaService,
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }
  ],
  exports: [
    ClientRepository,
    UserRepository
  ]
})
export class DatabaseModule { }
