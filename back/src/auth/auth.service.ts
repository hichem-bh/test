import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from 'src/user/models/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

export interface LoginInterface {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserModel>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(user: LoginInterface) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltOrRounds);
    const result = await this.userService.createUser(
      user.email,
      hashedPassword,
    );
    return result;
  }

  async login(user: LoginInterface) {
    const username: string = user.email;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltOrRounds);
    const existingUser = await this.userService.getUser(
      user.email,
      hashedPassword
    );

    if (existingUser) {
      const accessMessage: string = await this.jwtService.sign(user);
      return { accessMessage };
    } else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
