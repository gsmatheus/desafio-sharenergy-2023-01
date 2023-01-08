import { LoginUseCase } from "@domain/use-cases/auth/login";
import { JwtTokenService } from "@infra/services/jwt/jwt.service";
import { Body, Controller, Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
  constructor(
    private loginUseCase: LoginUseCase,
    private jwtService: JwtTokenService
  ) { }

  @Post('login')
  async login(@Body() body) {
    const { email, password } = body;

    const { user } = await this.loginUseCase.execute(
      email,
      password
    );

    // generate token
    const token = await this.jwtService.createToken({
      email: user.email,
    }, '1d');

    return {
      user,
      token
    }
  }
}
