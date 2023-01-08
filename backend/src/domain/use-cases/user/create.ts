import { User } from "@domain/entities/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { Injectable } from "@nestjs/common";

export interface CreateUserRequest {
  email: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(request: CreateUserRequest) {
    const { email, password } = request;

    const user = await this.userRepository.create(new User({
      email,
      password
    }));

    return { user };
  }
}
