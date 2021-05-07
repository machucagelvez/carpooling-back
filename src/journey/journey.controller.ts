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
        return {
            message: 'Viajes mostrados',
            data
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.journeyService.findOne(id)
    }

    @Post()
    create(@Body() dto: CreateJourneyDto) {
        return this.journeyService.create(dto)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: EditJourneyDto) {
        return this.journeyService.update(id, dto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.journeyService.delete(id)
    }
}
