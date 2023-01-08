import { IExceptionNotFound, IExceptionUnauthorized } from "@domain/exceptions/exceptions.interface";
import { UserRepository } from "@domain/repositories/user-repository";
import { BcryptService } from "@infra/services/bcrypt/bcrypt.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginUseCase {
  constructor(
    private userRepository: UserRepository,
    private bcryptService: BcryptService
  ) { }

  async execute(userEmail: string, userPassword: string) {
    const user = await this.userRepository.findByEmail(userEmail);
    console.log(user);

    if (!user) {
      throw new IExceptionNotFound('Invalid username or password.');
    }

    const isValidPassword = await this.bcryptService.compare(userPassword, user.password)

    if (!isValidPassword) {
      throw new IExceptionUnauthorized('Invalid username or password.');
    }

    return { user };
  }
}
