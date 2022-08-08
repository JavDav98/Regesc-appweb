class StudentModel extends PersonaModel{
    carnet: number;
    constructor(idPerson: number, nombr: string, apellid: string, emai: string, te: number, direccio: string, nacimient: any, carnet?: number) {
       super(idPerson, nombr, apellid, emai, te, direccio, nacimient);
       this.carnet = Math.floor(Math.random() * ((31901899999+1) - 31901800000) + 31901800000);
    }
}
