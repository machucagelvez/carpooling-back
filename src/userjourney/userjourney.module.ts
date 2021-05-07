import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userjourney } from './entities/userjourney.entity';
import { UserjourneyController } from './userjourney.controller';
import { UserjourneyService } from './userjourney.service';

@Module({
    imports: [TypeOrmModule.forFeature([Userjourney])],
    controllers: [UserjourneyController],
    providers: [UserjourneyService]
})
export class UserjourneyModule {}
