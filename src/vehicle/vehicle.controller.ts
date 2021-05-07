import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { EditVehicleDto } from './dtos/edit-vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {

    constructor(private readonly vehicleService: VehicleService) {}

    @Get()
    async findAll() {
        const data = await this.vehicleService.findAll()
        return {
            message: 'Vehículos mostrados',
            data
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.vehicleService.findOne(id)
    }

    @Post()
    create(@Body() dto: CreateVehicleDto) {
        return this.vehicleService.create(dto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() dto: EditVehicleDto
        ) {
            return this.vehicleService.update(id, dto)
        }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.vehicleService.delete(id)
    }
}
