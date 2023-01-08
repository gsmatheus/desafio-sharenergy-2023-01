import { User } from "@domain/entities/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { Injectable } from "@nestjs/common";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaUserRepository implements UserRepository {

  constructor(private prisma: PrismaService) { }

  async create(user: User): Promise<User> {
    const raw = PrismaUserMapper.toPrisma(user);

    const createdUser = await this.prisma.user.create({
      data: raw,
    });

    return PrismaUserMapper.toDomain(createdUser);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;
    return PrismaUserMapper.toDomain(user);
  }

  save(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  remove(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
