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
        return {
            message: 'Viajes mostrados',
            data
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userrouteService.findOne(id)
    }

    @Post()
    create(@Body() dto: CreateUserrouteDto) {
        return this.userrouteService.create(dto)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: EditUserrouteDto) {
        return this.userrouteService.update(id, dto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userrouteService.delete(id)
    }
}
