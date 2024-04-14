import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { AppModule } from 'src/app.module';
import { AppService } from 'src/app.service';
import { AppController } from 'src/app.controller';
import { AuthGuard } from './auth.guard';
import { SiswaModule } from 'src/siswa/siswa.module';

@Module({
  exports:[AuthService],
  controllers: [AuthController],
  providers: [AuthService],
  imports :[
    //AppModule,
    SiswaModule,
    UsersModule,
    JwtModule.register({
      global:true,
      secret:jwtConstants.secret,
      //signOptions:{expiresIn:'300s'}
    }),
  ],
})
export class AuthModule {}
