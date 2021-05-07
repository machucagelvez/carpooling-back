import { IsNumber } from "class-validator"


export class CreateUserrouteDto{
    
    @IsNumber()
    userId_ur: number
    
    @IsNumber()
    routeId_ur: number
}