import { IsNotEmpty, IsString, Length } from "class-validator";

export class FindClientDto {
  @IsNotEmpty()
  @IsString()
  @Length(24, 24)
  id: string;
}
