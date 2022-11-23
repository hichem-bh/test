import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService, LoginInterface } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() user: LoginInterface) {
    console.log('Login...');
    return this.authService.login(user);
  }

  @Post('/register')
  register(@Body() user: LoginInterface) {
    console.log('Adding new user...');
    return this.authService.register(user);
  }
}
