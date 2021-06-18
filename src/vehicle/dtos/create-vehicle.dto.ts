import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { EnumToString } from "src/common/helpers/enumToString";
import { VehicleType } from "../enums/vehicleType.enum";


export class CreateVehicleDto{

    @IsOptional()
    @IsEnum(VehicleType, {
        message: `Opción inválida. Las opciones correctas son: ${EnumToString(VehicleType)}`
    })
    vehicleType: VehicleType
    
    @IsString()
    plate: string

    @IsString()
    brand: string

    @IsNumber()
    userId: number
}