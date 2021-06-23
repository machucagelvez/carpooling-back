import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
//import { EnumToString } from "src/common/helpers/enumToString";
//import { VehicleType } from "../enums/vehicle-type.enum";


export class CreateVehicleDto{

    @IsOptional()
    // @IsEnum(VehicleType, {
    //     message: `Opción inválida. Las opciones correctas son: ${EnumToString(VehicleType)}`
    // })
    vehicleType: string
    
    @IsString()
    plate: string

    @IsString()
    brand: string

    @IsNumber()
    userId: number
}