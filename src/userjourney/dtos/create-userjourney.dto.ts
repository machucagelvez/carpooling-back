import { IsNumber } from "class-validator";


export class CreateUserjourneyDto{
    
    @IsNumber()
    userId_uj: number

    @IsNumber()
    journeyId_uj: number
}