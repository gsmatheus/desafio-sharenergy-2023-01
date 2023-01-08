import { User } from "@domain/entities/user";
import { User as RawUser } from "@prisma/client";

export class PrismaUserMapper {
  static toDomain(raw: RawUser): User {
    const user = new User({
      id: raw.id,
      email: raw.email,
      password: raw.password,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });

    return user;
  }

  static toPrisma(user: User): any {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
