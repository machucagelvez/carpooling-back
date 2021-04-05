import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { EditVehicleDto } from './dtos/edit-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehicleService {

    constructor(
        @InjectRepository(Vehicle)
        private readonly vehicleRepository: Repository<Vehicle>
    ) {}

    async findAll() {
        return await this.vehicleRepository.find()
    }

    async findOne(id: number) {
        const vehicle = await this.vehicleRepository.findOne(id)
        if (!vehicle) throw new NotFoundException('El vehículo buscado no existe')
        return vehicle
    }

    async create(dto: CreateVehicleDto) {
        const vehicle = await this.vehicleRepository.create(dto as any)
        return await this.vehicleRepository.save(vehicle)
    }

    async update(id: number, dto: EditVehicleDto) {
        const vehicle = await this.vehicleRepository.findOne(id)
        if(!vehicle) throw new NotFoundException('El usuario no existe')
        const editedVehicle = Object.assign(vehicle, dto)
        return await this.vehicleRepository.save(vehicle)
    }

    delete(id: number) {
        return this.vehicleRepository.delete(id)
    }
}
