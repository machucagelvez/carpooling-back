import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsOptional } from "class-validator";
import { CreateRouteDto } from "./create-route.dto";


export class EditRouteDto extends PartialType(CreateRouteDto){

    @IsOptional()
    @IsNumber()
    userId: number

}