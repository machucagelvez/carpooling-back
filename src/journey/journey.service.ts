import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJourneyDto } from './dtos/create-journey.dto';
import { EditJourneyDto } from './dtos/edit-journey.dto';
import { Journey } from './entities/journey.entity';

@Injectable()
export class JourneyService {

    constructor(
        @InjectRepository(Journey)
        private readonly journeyRepository: Repository<Journey>
    ) {}

    async findAll() {
        return await this.journeyRepository.find()
    }

    async findOne(id: number) {
        const journey = await this.journeyRepository.findOne(id)
        if (!journey) throw new NotFoundException('El viaje buscado no existe')
        return journey
    }

    async create(dto: CreateJourneyDto) {
        const journey = await this.journeyRepository.create(dto as any)
        return await this.journeyRepository.save(journey)
    }

    async update(id: number, dto: EditJourneyDto) {
        const journey = await this.journeyRepository.findOne(id)
        if(!journey) throw new NotFoundException('El viaje no existe')
        const editedJourney = Object.assign(journey, dto)
        return await this.journeyRepository.save(journey)
    }

    delete(id: number) {
        return this.journeyRepository.delete(id)
    }
}
