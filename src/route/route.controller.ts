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
        return { data }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.routeService.getOne(id)
        return { data }
    }

    @Post()
    async create(@Body() dto: CreateRouteDto) {
        const data = await this.routeService.create(dto)
        return { message: 'Ruta creada', data}
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: EditRouteDto) {
        const data = await this.routeService.update(id, dto)
        return { message: 'Ruta actualizada', data}
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        const data = await this.routeService.delete(id)
        return { message: 'Ruta eliminada', data}
    }
}
