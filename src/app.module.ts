import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RouteModule } from './route/route.module';
import { JourneyModule } from './journey/journey.module';
import { UserjourneyModule } from './userjourney/userjourney.module';
import { UserrouteModule } from './userroute/userroute.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from './config/constants';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'mysql',
                host: config.get<string>(DATABASE_HOST),
                port: parseInt(config.get<string>(DATABASE_PORT), 10),
                username: config.get<string>(DATABASE_USERNAME),
                password: config.get<string>(DATABASE_PASSWORD),
                database: config.get<string>(DATABASE_NAME),
                entities: [__dirname + './**/**/*entity{.ts,.js}'],
                autoLoadEntities: true,
                synchronize: true,
            })
        }),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        UserModule,
        RouteModule,
        JourneyModule,
        UserjourneyModule,
        UserrouteModule,
        VehicleModule,
        AuthModule
        ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
