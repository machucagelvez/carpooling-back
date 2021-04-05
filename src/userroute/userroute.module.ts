import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userroute } from './entities/userroute.entity';
import { UserrouteController } from './userroute.controller';
import { UserrouteService } from './userroute.service';

@Module({
    imports: [TypeOrmModule.forFeature([Userroute])],
    controllers: [UserrouteController],
    providers: [UserrouteService]
})
export class UserrouteModule {}
