import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { EditUserDto } from './dtos/edit-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll() {
        const data = await this.userService.findAll()
        return {
            message: 'Usuarios mostrados',
            data
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() dto: EditUserDto
        ) {
            return this.userService.update(id, dto)
        }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.delete(id)
    }
}
