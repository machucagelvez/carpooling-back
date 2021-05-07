import { OmitType, PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";


export class EditUserDto extends PartialType(
    OmitType(CreateUserDto, ['notificationId'] as const)
){

}