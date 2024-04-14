export class CreatedOrderRequest{

    name:string;
    kelas:number;
    email:string;
}

// @Entity()
// export class Student{
//     @PrimaryGeneratedColumn()
//     id:number;

//     @Column()
//     name: string;

//     @Column()
//     email: string;

//     @ManyToOne(() => ClassStudent, (classstudent) => classstudent.students)
//     class:ClassStudent;
    
// }