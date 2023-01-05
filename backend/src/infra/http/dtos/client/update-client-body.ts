import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { DocumentType } from "@prisma/client";

export class UpdateClientBody {
  @IsOptional()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  document: string;

  @IsOptional()
  @IsEnum(["CPF", "CNPJ"])
  documentType: DocumentType;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  profilePicture: string;
}
