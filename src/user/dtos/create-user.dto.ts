import { IsBoolean, IsEmail, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    user: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsNumber()
    phone: number;

    @IsOptional()
    @IsBoolean()
    userType: boolean;

    @IsOptional()
    @IsString()
    waLink: string;

    @IsOptional()
    @IsBoolean()
    rol: boolean;

    @IsOptional()
    @IsNumber()
    notificationId: number;
}