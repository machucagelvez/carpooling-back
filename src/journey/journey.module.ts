import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Journey } from './entities/journey.entity';
import { JourneyController } from './journey.controller';
import { JourneyService } from './journey.service';

@Module({
    imports: [TypeOrmModule.forFeature([Journey])],
    controllers: [JourneyController],
    providers: [JourneyService]
})
export class JourneyModule {}
