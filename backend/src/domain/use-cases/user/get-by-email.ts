import { UserRepository } from "@domain/repositories/user-repository";
import { Injectable } from "@nestjs/common";

export interface GetByEmailRequest {
  email: string;
}

@Injectable()
export class GetByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(request: GetByEmailRequest) {
    const { email } = request;

    const user = await this.userRepository.findByEmail(email);

    return { user };
  }
}
