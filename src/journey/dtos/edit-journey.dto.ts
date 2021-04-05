import { PartialType } from "@nestjs/mapped-types";
import { CreateJourneyDto } from "./create-journey.dto";


export class EditJourneyDto extends PartialType(CreateJourneyDto){

}