import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { GetByEmailUseCase } from '@domain/use-cases/user/get-by-email';
import { IExceptionUnauthorized } from '@domain/exceptions/exceptions.interface';
import { ConfigService } from '@nestjs/config';

interface IJwtPayload {
  email: string;
  iat: number;
  exp: number;
}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private getByEmailUseCase: GetByEmailUseCase,
    private configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: IJwtPayload) {
    const { email } = payload;

    const { user } = await this.getByEmailUseCase.execute({ email });

    if (!user) {
      throw new IExceptionUnauthorized('Invalid username or password.');
    }

    return user;
  }
}
