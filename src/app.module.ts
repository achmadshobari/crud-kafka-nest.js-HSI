import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Student } from './entity/siswa.entity';
import { ClassStudent } from './entity/kelas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SiswaModule } from './siswa/siswa.module';
import { User } from './entity/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BILLING_SERVICE',
        transport:Transport.KAFKA,
        options:{
          client:{
            clientId:'billing',
            brokers:['localhost:9092'],
          },  
        
          consumer:{
            groupId:'billing-consumer',
          },
        },
      },  
    ]),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port:3306,
      username: 'root',
      password: '',
      database:'sandbox',
      entities: [ Student, ClassStudent, User],
      synchronize:true,
    }),
    TypeOrmModule.forFeature([Student, ClassStudent, User]),
    JwtModule,
    AuthModule,
    UsersModule,
    SiswaModule,
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 12,
    }]),
  ],
  controllers: [AppController],
  providers: [AppService, 
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },   

  ],
})
export class AppModule {}
