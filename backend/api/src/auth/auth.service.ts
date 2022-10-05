import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor (
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readnoly prisma: PrismaService
    ) {}
}
