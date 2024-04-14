import { Module } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { Student } from 'src/entity/siswa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Student])],  
  providers: [SiswaService],
  exports:[SiswaService],
})
export class SiswaModule {}
