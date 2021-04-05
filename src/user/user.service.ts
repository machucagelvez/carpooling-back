import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { EditUserDto } from './dtos/edit-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findAll() {
        return await this.userRepository.find()
    }

    async findOne(id: number) {
        const user = await this.userRepository.findOne(id)
        if (!user) throw new NotFoundException('El usuario buscado no existe')
        return user
    }

    async create(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto as any)
        return await this.userRepository.save(user)
    }

    async update(id: number, dto: EditUserDto) {
        const user = await this.userRepository.findOne(id)
        if(!user) throw new NotFoundException('El usuario no existe')
        const editedUser = Object.assign(user, dto)
        return await this.userRepository.save(user)
    }

    delete(id: number) {
        return this.userRepository.delete(id)
    }
}
