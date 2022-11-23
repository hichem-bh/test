import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserModel } from './models/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('UserModel') private readonly userModel: Model<UserModel>,
  ) {}
  async createUser(email: string, password: string) {
    try {
      return this.userModel.create({
        email,
        password,
      });
    } catch (e) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
  async getUser(email: string, password: string) {
    console.log('Getting user...');
    return this.userModel.findOne({ email });
  }

  async getAllUsers() {
    return this.userModel.find();
  }
}
