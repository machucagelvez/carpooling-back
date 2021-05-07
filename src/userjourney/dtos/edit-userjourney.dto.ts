import { PartialType } from "@nestjs/mapped-types";
import { CreateUserjourneyDto } from "./create-userjourney.dto";


export class EditUserjourneyDto extends PartialType(CreateUserjourneyDto){}