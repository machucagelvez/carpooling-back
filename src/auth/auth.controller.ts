import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/common/helpers/decorators/user.decorator';
import { User as UserEntity } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(
        @User() user: UserEntity
    ) {
        const data = this.authService.login(user)
        return {
            message: 'Login exitoso',
            data
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile(
        @User() user: UserEntity
    ) {
        return {
            message: 'Petición correcta',
            user
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('refresh')
    refreshToken(@User() user: UserEntity) {
        const data = this.authService.login(user);
        return {
        message: 'Refresh exitoso',
        data,
        };
    }
}
