import { IsOptional, IsString, Min } from "class-validator";


export class CreateRouteDto{

    @IsString()
    schedule: string;

    @IsString()
    time: string;

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

    @IsOptional()
    @Min(0)
    emptySpaces: number;

    @IsOptional()
    @IsString()
    carpooler: string;
}