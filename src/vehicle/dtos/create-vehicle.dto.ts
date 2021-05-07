import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { VehicleType } from "../enums/vehicleType.enum";


export class CreateVehicleDto{

    @IsEnum(VehicleType, {
        message: `Opción inválida. Las opciones correctas son: ${EnumToString(VehicleType)}`
    })
    vehicleType: VehicleType

    @IsOptional()
    @IsString()
    plate: string

    @IsNumber()
    userId: number
}