import { HttpModule } from '@infra/http/http-module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
