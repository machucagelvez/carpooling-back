import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Repository } from 'typeorm';
import { CreateRouteDto } from './dtos/create-route.dto';
import { EditRouteDto } from './dtos/edit-route.dto';
import { Route } from './entities/route.entity';

@Injectable()
export class RouteService {

    constructor(
        @InjectRepository(Route)
        private readonly routeRepository: Repository<Route>
    ) {}

    async findAll() {
        return await this.routeRepository.find()
    }

    async getOne(id: number) {
        const route = await this.routeRepository.findOne(id, {relations: ['users']})
        if (!route) throw new NotFoundException('La ruta buscada no existe')
        return route
    }

    async create(dto: CreateRouteDto) {
        const route = this.routeRepository.create(dto)
        const vehicle = new Vehicle 
        vehicle.vehicleId = dto.vehicleId
        route.vehicle = vehicle
        return await this.routeRepository.save(route)
    }

    async update(id: number, dto: EditRouteDto) {
        const route = await this.getOne(id)
        if(dto.userId) {
            let user1 = new User
            user1.userId = dto.userId
            route.users.push(user1)
        }
        const editedRoute = Object.assign(route, dto)
        return await this.routeRepository.save(editedRoute)
    }

    async delete(id: number) {
        await this.getOne(id)
        return await this.routeRepository.delete(id)
    }
}
