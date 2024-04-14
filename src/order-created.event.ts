export class OrderCreatedEvent {
    constructor (

        public readonly name:string,
        public readonly email:string,
        public readonly kelas:number,
    
    ) {}

    toString(){
        return JSON.stringify({

            name:this.name,
            email:this.email,
            kelas:this.kelas,
        
        });
    }
}