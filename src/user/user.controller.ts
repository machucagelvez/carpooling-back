import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dtos/create-user.dto';
import { EditUserDto } from './dtos/edit-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    //@UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        const data = await this.userService.findAll()
        return { data }
    }

    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.userService.getOne(id)
        return { data }
    }

    @Post()
    async create(@Body() dto: CreateUserDto) {
        const data = await this.userService.create(dto)
        return { message: 'Usuario creado', data}
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: EditUserDto
        ) {
            const data = await this.userService.update(id, dto)
            return { message: 'Usuario editado', data}
        }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        const data = await this.userService.delete(id)
        return { message: 'Usuario eliminado', data}
    }
}
