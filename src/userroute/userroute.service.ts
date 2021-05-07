import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserrouteDto } from './dtos/create-userroute.dto';
import { EditUserrouteDto } from './dtos/edit-userroute.dto';
import { Userroute } from './entities/userroute.entity';

@Injectable()
export class UserrouteService {

    constructor(
        @InjectRepository(Userroute)
        private readonly userrouteRepository: Repository<Userroute>
    ) {}

    async findAll() {
        return await this.userrouteRepository.find()
    }

    async findOne(id: number) {
        const userroute = await this.userrouteRepository.findOne(id)
        if (!userroute) throw new NotFoundException('El ID buscado no existe')
        return userroute
    }

    async create(dto: CreateUserrouteDto) {
        const userroute = await this.userrouteRepository.create(dto as any)
        return await this.userrouteRepository.save(userroute)
    }

    async update(id: number, dto: EditUserrouteDto) {
        const userroute = await this.userrouteRepository.findOne(id)
        if(!userroute) throw new NotFoundException('El ID no existe')
        const editedUserroute = Object.assign(userroute, dto)
        return await this.userrouteRepository.save(userroute)
    }

    delete(id: number) {
        return this.userrouteRepository.delete(id)
    }
}
