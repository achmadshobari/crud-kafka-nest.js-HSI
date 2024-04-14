import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AppService } from 'src/app.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService:AuthService,
    //private appService:AppService
    ){}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto:Record<string,any>){
    return this.authService.signIn(signInDto.username, signInDto.password);    
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() user: Record<string, any>){
    return this.authService.registerUser(user);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(): Promise<string>{
    return 'this is protected route';
  }

  @HttpCode(HttpStatus.OK)
  @Post('logins')
  signIns(@Body() signInDto:Record<string,any>): any{
    return this.authService.signInStudent(signInDto.id, signInDto.email);    
  }

  @HttpCode(HttpStatus.OK)
  @Post('registers')
  registers(@Body() student: Record<string, any>){
    return this.authService.registerStudent(student);
  }

}
