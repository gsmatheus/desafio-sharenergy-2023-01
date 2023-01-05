import { DocumentType } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ClientAddressDto } from "./address-client-dto";

export enum EDocumentType  {
  CPF = "CPF",
  CNPJ = "CNPJ"
}

export class CreateClientBody {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty()
  @IsEnum(["CPF", "CNPJ"])
  documentType: DocumentType;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  address: ClientAddressDto;
}
