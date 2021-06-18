import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findUser({ email })
        
        if (user && await compare(pass, user.password)) {
            const {password, ...rest} = user
            return rest
        }

        return null
    }

    login(user: User) {
        const payload = { 
            id: user.userId,
            user: user.user,
            type: user.userType

        }

        return {
            user,
            accessToken: this.jwtService.sign(payload)
        }
    }
}