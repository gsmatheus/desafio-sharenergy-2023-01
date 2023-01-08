import { User } from "@domain/entities/user";

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract findByEmail(email: string): Promise<User | undefined>;
  abstract save(user: User): Promise<User>;
  abstract remove(id: string): Promise<void>;
}
