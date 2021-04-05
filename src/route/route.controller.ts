import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateRouteDto } from './dtos/create-route.dto';
import { EditRouteDto } from './dtos/edit-route.dto';
import { RouteService } from './route.service';

@Controller('route')
export class RouteController {

    constructor(private readonly routeService: RouteService) {}

    @Get()
    async findAll() {
        const data = await this.routeService.findAll()
        return {
            message: 'Rutas mostradas',
            data
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.routeService.findOne(id)
    }

    @Post()
    create(@Body() dto: CreateRouteDto) {
        return this.routeService.create(dto)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: EditRouteDto) {
        return this.routeService.update(id, dto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.routeService.delete(id)
    }
}
