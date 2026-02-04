import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  status: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  userDni: string;

  @IsEmail()
  @IsNotEmpty()
  userEmail: string;

  @IsString()
  @IsNotEmpty()
  userPhone: string;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  secondName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  secondLastName: string;

  @IsOptional()
  birthDate: Date;

  @IsString()
  @IsOptional()
  houseNumber: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  parish: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsNumber()
  @IsOptional()
  identificationType: number;

  @IsNumber()
  @IsOptional()
  legalPerson: number;

  @IsNumber()
  @IsOptional()
  maritialStatus: number;

  @IsString()
  @IsOptional()
  spouse: string;

  @ValidateNested()
  @Type(() => CreateUserDto)
  @IsNotEmpty()
  user: CreateUserDto;

  @IsString()
  @IsOptional()
  parishId: string;

  @IsString()
  @IsOptional()
  cityId: string;

  @IsString()
  @IsOptional()
  stateId: string;
}

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  userDni: string;

  @IsEmail()
  @IsOptional()
  userEmail: string;

  @IsString()
  @IsOptional()
  userPhone: string;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  secondName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  secondLastName: string;

  @IsOptional()
  birthDate: Date;

  @IsString()
  @IsOptional()
  houseNumber: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  parish: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsNumber()
  @IsOptional()
  identificationType: number;

  @IsNumber()
  @IsOptional()
  legalPerson: number;

  @IsNumber()
  @IsOptional()
  maritialStatus: number;

  @IsString()
  @IsOptional()
  spouse: string;

  @ValidateNested()
  @Type(() => CreateUserDto)
  @IsNotEmpty()
  user: CreateUserDto;

  @IsString()
  @IsOptional()
  parishId: string;

  @IsString()
  @IsOptional()
  cityId: string;

  @IsString()
  @IsOptional()
  stateId: string;
}
