import { OmitType, PartialType } from "@nestjs/mapped-types";
import { CreateVehicleDto } from "./create-vehicle.dto";


export class EditVehicleDto extends PartialType(OmitType(CreateVehicleDto, ['userId'] as const)) {}