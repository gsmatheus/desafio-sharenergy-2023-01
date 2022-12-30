import { Injectable } from "@nestjs/common";
import { Client } from "src/domain/entities/client";
import { ClientRepository } from "src/domain/repositories/client-repository";
import { PrismaClientMapper } from "../mappers/prisma-client-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaClientRepository implements ClientRepository {

  constructor(private prisma: PrismaService) { }

  async create(client: Client): Promise<Client> {
    // @TODO: Implement this method toPrismaClientMapper
    const { fullName, email, phone, address } = client;

    const createdClient = await this.prisma.client.create({
      data: {
        fullName,
        email,
        phone,
        address: {
          create: {
            street: address.street,
            number: address.number,
            city: address.city,
            state: address.state,
            country: address.country,
            zip: address.zip
          }
        }
      }
    });

    return PrismaClientMapper.toDomain(createdClient)
  }

}
