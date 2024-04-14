import { Inject, Injectable } from '@nestjs/common';
import { CreatedOrderRequest } from './created-order-request.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';
import { Student } from './entity/siswa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient:ClientKafka,
    @InjectRepository(Student)  
    private readonly classstudentRepository:Repository<Student>
  ){}


  getHello(): string {
    return 'Hello World!';
  }

  createdOrder({name,email,kelas}:CreatedOrderRequest){
    this.billingClient.emit('order_created',new OrderCreatedEvent(name, email, kelas),);
  }

  //get student by id
  async getStudentById(id: number): Promise<Student |null>{
    return await this.classstudentRepository.findOne({
      where:[{id}],
    });
  }

  async getAllStudent(): Promise<Student[]>{
    return await this.classstudentRepository.find();
  } 

  //update student
  updateStudent(id, {name, email, kelas}){  
    //console.log(data);
    this.billingClient.emit('update_created', { id, name, email, kelas} );
  }  

  //delete student
  async deleteStudent(id: number): Promise<void>{
    await this.billingClient.emit('delete_created',id);
  }


}
