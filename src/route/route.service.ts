import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

    async findOne(id: number) {
        const route = await this.routeRepository.findOne(id)
        if (!route) throw new NotFoundException('La ruta buscada no existe')
        return route
    }

    async create(dto: CreateRouteDto) {
        const route = await this.routeRepository.create(dto as any)
        return await this.routeRepository.save(route)
    }

    async update(id: number, dto: EditRouteDto) {
        const route = await this.routeRepository.findOne(id)
        if(!route) throw new NotFoundException('La ruta no existe')
        const editedRoute = Object.assign(route, dto)
        return await this.routeRepository.save(route)
    }

    delete(id: number) {
        return this.routeRepository.delete(id)
    }
}
