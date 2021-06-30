import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { EditVehicleDto } from './dtos/edit-vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {

    constructor(private readonly vehicleService: VehicleService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        const data = await this.vehicleService.findAll()
        return { data }
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.vehicleService.getOne(id)
        return { data }
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() dto: CreateVehicleDto) {
        const data = await this.vehicleService.create(dto)
        return { message: 'Vehículo creado', data}
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: EditVehicleDto) {
            const data = await this.vehicleService.update(id, dto)
            return { message: 'Vehículo actualizado', data}
    }
        
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: number) {
        const data = await this.vehicleService.delete(id)
        return { message: 'Vehículo eliminado', data}
    }
}
