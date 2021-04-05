import { IsString, Min } from "class-validator";


export class CreateRouteDto{

    @IsString()
    schedule: string;

    @IsString()
    routeName: string;

    @Min(0)
    cost: number;

    @IsString()
    routeOrigin: string;

    @IsString()
    routeDestination: string;

    @Min(0)
    spaces: number;

    @Min(0)
    emptySpaces: number;

    @IsString()
    carpooler: string;
}