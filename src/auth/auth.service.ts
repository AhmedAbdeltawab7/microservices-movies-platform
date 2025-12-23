import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(name: string, email: string, password: string) {
    // يرجّع UserDocument وفيه _id
    const user = await this.usersService.create({ name, email, password });

    return {
      message: 'User created successfully',
      userId: user._id.toString(),
    };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user._id.toString(), email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
