import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
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

    async getOne(id: number) {
        const vehicle = await this.vehicleRepository.findOne(id, {relations: ['route']})
        if (!vehicle) throw new NotFoundException('El vehículo buscado no existe')
        return vehicle
    }

    async create(dto: CreateVehicleDto) {
        const vehicleExist = await this.vehicleRepository.findOne({plate: dto.plate})
        if (vehicleExist) throw new BadRequestException(`Ya existe un vehículo con placa: ${dto.plate}`)        
        const newVehicle = this.vehicleRepository.create(dto)
        const user = new User
        user.userId = dto.userId
        newVehicle.user = user
        return await this.vehicleRepository.save(newVehicle)
    }

    async update(id: number, dto: EditVehicleDto) {
        const vehicle = await this.getOne(id)
        const editedVehicle = Object.assign(vehicle, dto)
        return await this.vehicleRepository.save(editedVehicle)
    }

    async delete(id: number) {
        await this.getOne(id)
        return await this.vehicleRepository.delete(id)
    }
}
