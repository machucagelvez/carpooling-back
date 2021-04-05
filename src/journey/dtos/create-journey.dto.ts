import { IsString } from "class-validator";


export class CreateJourneyDto{

    @IsString()
    userOrigin: string;

    @IsString()
    userDestination: string
}