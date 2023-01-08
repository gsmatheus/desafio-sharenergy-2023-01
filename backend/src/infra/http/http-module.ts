import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { CreateClientUseCase } from "@domain/use-cases/client/create-client";
import { ClientController } from "./controllers/client.controller";
import { FindClientByIdUseCase } from "@domain/use-cases/client/get-client-by-id";
import { FindEmailOrDocumentUseCase } from "@domain/use-cases/client/find-email-or-document";
import { UpdateClientUseCase } from "@domain/use-cases/client/update-client";
import { DeleteClientUseCase } from "@domain/use-cases/client/delete-client";
import { CreateUserUseCase } from "@domain/use-cases/user/create";
import { AuthController } from "./controllers/auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtModuleService } from "@infra/services/jwt/jwt.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { LocalStrategy } from "@infra/common/strategies/local.strategy";
import { GetByEmailUseCase } from "@domain/use-cases/user/get-by-email";
import { LoginUseCase } from "@domain/use-cases/auth/login";
import { BcryptModule } from "@infra/services/bcrypt/bcrypt.module";

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     return {
    //       secret: configService.get('JWT_SECRET'),
    //       signOptions: { expiresIn: '1d' },
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    BcryptModule,
    JwtModuleService
  ],
  controllers: [
    ClientController,
    AuthController
  ],
  providers: [
    LocalStrategy,

    // Usecases
    CreateClientUseCase,
    FindClientByIdUseCase,
    FindEmailOrDocumentUseCase,
    UpdateClientUseCase,
    DeleteClientUseCase,
    CreateUserUseCase,
    GetByEmailUseCase,
    LoginUseCase
  ],
  exports: [
    LocalStrategy,
    PassportModule
  ]
})
export class HttpModule { }
