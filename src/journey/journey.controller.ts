import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateJourneyDto } from './dtos/create-journey.dto';
import { EditJourneyDto } from './dtos/edit-journey.dto';
import { JourneyService } from './journey.service';

@Controller('journey')
export class JourneyController {

    constructor(private readonly journeyService: JourneyService) {}

    @Get()
    async findAll() {
        const data = await this.journeyService.findAll()
        return { data }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = this.journeyService.getOne(id)
        return { data }
    }

    @Post()
    async create(@Body() dto: CreateJourneyDto) {
        const data = await this.journeyService.create(dto)
        return { message: 'Viaje creado', data}
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: EditJourneyDto) {
        const data = await this.journeyService.update(id, dto)
        return { message: 'Viaje editado', data}
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        const data = await this.journeyService.delete(id)
        return { message: 'Viaje eliminado', data}
    }
}
