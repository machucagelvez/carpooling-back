import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserrouteDto } from './dtos/create-userroute.dto';
import { EditUserrouteDto } from './dtos/edit-userroute.dto';
import { UserrouteService } from './userroute.service';

@Controller('userroute')
export class UserrouteController {

    constructor(private readonly userrouteService: UserrouteService) {}

    @Get()
    async findAll() {
        const data = await this.userrouteService.findAll()
        return { data }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.userrouteService.getOne(id)
        return { data }
    }

    @Post()
    async create(@Body() dto: CreateUserrouteDto) {
        const data = await this.userrouteService.create(dto)
        return { message: 'UserRoute creado', data}
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: EditUserrouteDto) {
        const data = await this.userrouteService.update(id, dto)
        return { message: 'UserRoute actualizado', data}
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        const data = await this.userrouteService.delete(id)
        return { message: 'UserRoute eliminado', data}
    }
}
