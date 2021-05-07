import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserjourneyDto } from './dtos/create-userjourney.dto';
import { EditUserjourneyDto } from './dtos/edit-userjourney.dto';
import { UserjourneyService } from './userjourney.service';

@Controller('userjourney')
export class UserjourneyController {

    constructor(private readonly userjourneyService: UserjourneyService) {}

    @Get()
    async findAll() {
        const data = await this.userjourneyService.findAll()
        return { data }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.userjourneyService.getOne(id)
        return { data }
    }

    @Post()
    async create(@Body() dto: CreateUserjourneyDto) {
        const data = await this.userjourneyService.create(dto)
        return { message: 'UserJourney creado', data}
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: EditUserjourneyDto) {
        const data = await this.userjourneyService.update(id, dto)
        return { message: 'UserJourney actualizado', data}
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        const data = await this.userjourneyService.delete(id)
        return { message: 'UserJourney eliminado', data}
    }
}
