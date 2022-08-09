interface StudentModel extends PersonaModel{
    carnet: number;
}

class StudentModel implements StudentModel{
    constructor( ){
        this.carnet = Math.floor(Math.random() * ((31901899999+1) - 31901800000) + 31901800000);
    }
}
