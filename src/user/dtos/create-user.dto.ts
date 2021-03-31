import { IsBoolean, IsEmail, IsEnum, IsNumber, IsNumberString, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { UserVehicleType } from "../enums/user-vehicleType.enum";

export class CreateUserDto {
    
    @IsString()
    user: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsNumberString()
    phone: string;

    @IsEnum(UserVehicleType, {
        message: `Opción inválida. Las opciones correctas son: ${EnumToString(UserVehicleType)}`
    })
    vehicleType: UserVehicleType;

    @IsBoolean()
    userType: boolean;

    @IsString()
    waLink: string;

    @IsString()
    plate: string;

    @IsBoolean()
    rol: boolean;

    @IsNumber()
    notificationId: number;
}