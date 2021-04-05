import { PartialType } from "@nestjs/mapped-types";
import { CreateUserrouteDto } from "./create-userroute.dto";


export class EditUserrouteDto extends PartialType(CreateUserrouteDto){}