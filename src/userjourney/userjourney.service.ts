import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserjourneyDto } from './dtos/create-userjourney.dto';
import { EditUserjourneyDto } from './dtos/edit-userjourney.dto';
import { Userjourney } from './entities/userjourney.entity';

@Injectable()
export class UserjourneyService {

    constructor(
        @InjectRepository(Userjourney)
        private readonly userjourneyRepository: Repository<Userjourney>
    ) {}

    async findAll() {
        return await this.userjourneyRepository.find()
    }

    async findOne(id: number) {
        const userjourney = await this.userjourneyRepository.findOne(id)
        if (!userjourney) throw new NotFoundException('El ID buscado no existe')
        return userjourney
    }

    async create(dto: CreateUserjourneyDto) {
        const userjourney = await this.userjourneyRepository.create(dto as any)
        return await this.userjourneyRepository.save(userjourney)
    }

    async update(id: number, dto: EditUserjourneyDto) {
        const userjourney = await this.userjourneyRepository.findOne(id)
        if(!userjourney) throw new NotFoundException('El ID no existe')
        const editedUserjourney = Object.assign(userjourney, dto)
        return await this.userjourneyRepository.save(userjourney)
    }

    delete(id: number) {
        return this.userjourneyRepository.delete(id)
    }
}
