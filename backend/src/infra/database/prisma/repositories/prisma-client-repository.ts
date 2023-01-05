import { ClientAddress } from "@domain/entities/client-address";
import { IExceptionForbidden, IExceptionNotFound } from "@domain/exceptions/exceptions.interface";
import { Injectable } from "@nestjs/common";
import { Client } from "src/domain/entities/client";
import { ClientRepository } from "src/domain/repositories/client-repository";
import { PrismaClientMapper } from "../mappers/prisma-client-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaClientRepository implements ClientRepository {

  constructor(private prisma: PrismaService) { }

  async create(client: Client, clientAddress: ClientAddress): Promise<Client> {
    const raw = PrismaClientMapper.toPrisma(client, clientAddress);

    const createdClient = await this.prisma.client.create({
      data: raw,
    });

    return PrismaClientMapper.toDomain(createdClient);
  }

  async findById(id: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: { id },
      include: {
        address: true,
      }
    });

    if (!client) {
      throw new IExceptionNotFound('Client not found');
    }

    return PrismaClientMapper.toDomainWithAddress(client);
  }

  async findByEmail(email: string): Promise<Client | undefined> {
    const client = await this.prisma.client.findUnique({
      where: { email },
      include: {
        address: true,
      }
    });

    return client ? PrismaClientMapper.toDomainWithAddress(client) : undefined;
  }

  async findEmailOrDocument(email: string, document: string): Promise<Client> {
    const client = await this.prisma.client.findFirst({
      where: {
        OR: [
          { email, },
          { document, }
        ]
      },
      include: {
        address: true,
      }
    });

    return client ? PrismaClientMapper.toDomainWithAddress(client) : undefined;
  }
}
