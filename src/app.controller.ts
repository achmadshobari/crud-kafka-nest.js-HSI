import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatedOrderRequest } from './created-order-request.dto';
import { Student } from './entity/siswa.entity';
import { AuthGuard } from './auth/auth.guard';
import { Role } from './enums/role.enum';
import { Roles } from './roles.decorator';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  //create student
  @UseGuards(AuthGuard)
  @Post('student')
  createOrder(@Body() createdOrderRequest:CreatedOrderRequest){
    this.appService.createdOrder(createdOrderRequest);
  }

  //get student by id
  //@UseGuards(AuthGuard)
  // @Get('/student/:id')
  // async getStudentById(@Param('id') id:number):Promise<Student | null>{
  //   return await this.appService.getStudentById(id);
  // }

  // //get all student
  // // @UseGuards(AuthGuard)
  // @Get('/students')
  // async getAllStudent(): Promise<Student[]>{
  //   return await this.appService.getAllStudent();
  // } 

  //update data siswa
  @UseGuards(AuthGuard)
  @Put('/student/:id')
  updateStudent(@Param('id') id: number, @Body() createOrderRequest:CreatedOrderRequest,){
  return this.appService.updateStudent(id, createOrderRequest)
  }


  // //update data siswa
  // @UseGuards(AuthGuard)
  // @Put('/student/:id')
  // async updateStudent(
  //   @Param('id') id: number,
  //   @Body() studentData:Partial<Student>,
  // ):Promise<Student| null> {
  //   return await this.appService.updateStudent(id, studentData);
  // }

  // //delete student
  // @UseGuards(AuthGuard)
  // @Delete('/student/:id')
  // async deleteStudent(@Param('id') id:number): Promise<void>{
  //   return await this.appService.deleteStudent(id);
  // }

  //delete student

  
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  @Delete('/student/:id')
 
  async deleteStudent(@Param('id') id:number): Promise<void>{
    return await this.appService.deleteStudent(id);
  }

}
