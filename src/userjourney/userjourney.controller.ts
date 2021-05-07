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
        return {
            message: 'Viajes mostrados',
            data
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userjourneyService.findOne(id)
    }

    @Post()
    create(@Body() dto: CreateUserjourneyDto) {
        return this.userjourneyService.create(dto)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: EditUserjourneyDto) {
        return this.userjourneyService.update(id, dto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userjourneyService.delete(id)
    }
}
