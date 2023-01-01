import { IExceptionForbidden, IExceptionNotFound } from "@domain/exceptions/exceptions.interface";
import { Injectable } from "@nestjs/common";
import { Client } from "src/domain/entities/client";
import { ClientRepository } from "src/domain/repositories/client-repository";
import { PrismaClientMapper } from "../mappers/prisma-client-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaClientRepository implements ClientRepository {

  constructor(private prisma: PrismaService) { }

  async create(client: Client): Promise<Client> {
    const raw = PrismaClientMapper.toPrisma(client);

    const createdClient = await this.prisma.client.create({
      data: raw,
    });

    return PrismaClientMapper.toDomain(createdClient);
  }

  async findById(id: string): Promise<Client> {
    console.log('findById', id);

    const client = await this.prisma.client.findUnique({
      where: { id },
      include: {
        address: true,
      }
    });

    if (!client) {
      throw new IExceptionNotFound('Client not found');
    }

    return PrismaClientMapper.toDomain(client, client.address);
  }

}
