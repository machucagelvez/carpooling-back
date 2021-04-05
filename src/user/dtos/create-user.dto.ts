import { IsBoolean, IsEmail, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    user: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsNumberString()
    phone: string;

    @IsBoolean()
    userType: boolean;

    @IsString()
    waLink: string;

    @IsBoolean()
    rol: boolean;

    @IsNumber()
    notificationId: number;
}