import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { EditUserDto } from './dtos/edit-user.dto';
import { User } from './entities/user.entity';

export interface UserFindOne {
    id?: number
    email?: string
}

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findAll() {
        return await this.userRepository.find()
    }

    async getOne(id: number) {
        const user = await this.userRepository.findOne(id, {relations: ['routes', 'vehicle']})
        if (!user) throw new NotFoundException('El usuario no existe')
        return user
    }

    async create(dto: CreateUserDto) {
        const userExist = await this.userRepository.findOne({email: dto.email})
        if (userExist) throw new BadRequestException(`Ya existe un usuario con email: ${dto.email}`)
        const newUser = this.userRepository.create(dto)
        const user = await this.userRepository.save(newUser)
        delete user.password
        return user
    }

    async update(id: number, dto: EditUserDto) {
        const user = await this.getOne(id)
        const editedUser = Object.assign(user, dto)
        const edited = await this.userRepository.save(editedUser)
        delete edited.password
        return edited
    }

    async delete(id: number) {
        await this.getOne(id)
        return await this.userRepository.delete(id)
    }

    async findUser(data: UserFindOne) {
        return await this.userRepository
        .createQueryBuilder('user')
        .where(data)
        .addSelect('user.password')
        .getOne()
    }
}
