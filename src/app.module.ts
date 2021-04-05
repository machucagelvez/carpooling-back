import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RouteModule } from './route/route.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'carpooling',
            entities: [__dirname + './**/**/*entity{.ts,.js}'],
            autoLoadEntities: true,
            synchronize: true,
        }),
        UserModule,
        RouteModule
        ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
