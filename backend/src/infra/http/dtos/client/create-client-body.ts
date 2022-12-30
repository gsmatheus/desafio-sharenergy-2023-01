import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ClientAddressDto } from "./address-client-dto";

export class CreateClientBody {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  address: ClientAddressDto;
}
