import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EstudianteService} from "../../../Services/estudiante.service";
import {StudentModel} from "../../models/student.model";

declare var $:any;

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {
  public em: StudentModel;
  public p: PersonaModel;
  public f: string;

  constructor(private rutaActiva: ActivatedRoute,
              private estudianteService: EstudianteService,
              private rout: Router) {


  }

  ngOnInit(): void {
    let idCui = this.rutaActiva.snapshot.paramMap.get('id');
    try{
      this.estudianteService.getEstudiantesDatosInd(+idCui).subscribe(result=>{
        this.em = result;
        const [day, month, year] = result.nacimiento.toString().split('-');
        this.em.nacimiento = new Date(+year, +month - 1, +day);
        this.em.carnetstudent = this.em.studentList[0].carnetstudent;
        this.em.usuario = this.em.studentList[0].usuario;
        this.em.password = this.em.studentList[0].password;
        let daystring: string = '';
        if (+day < 10){
          daystring = '0'+this.em.nacimiento.getDate();
        }else{
          daystring = day;
        }
        let monthstring:string;
        if (this.em.nacimiento.getMonth()<10){
          monthstring ='0'+month;
        }else{
          monthstring = month;
        }
        let yearstring = year;
        this.f = `${year}-${month}-${day}`;
      })
    }catch (e){
      console.log(`Error: ${e}`)
    }
  }

  submit(formStudent: any, student: any){
    if (formStudent.valid){
      console.log(formStudent.value.toString());
      let aaaa: number = +student.fecha.toString().slice(0, -6);
      let mm: number = student.fecha.toString().slice(5, -3)-1;
      let dd: number = +student.fecha.toString().slice(-2);
      console.log(`Año ${aaaa}, Mes ${mm}, Dia ${dd}`);
      this.p.nacimiento = new Date(aaaa,mm,dd);
      this.p.cui = student.cui;
      this.p.nombre = student.nombre;
      this.p.apellido = student.apellido;
      this.p.email = student.email;
      this.p.telefono = student.telefono;
      this.p.direccion = student.direccion;
      this.p.studentList = student.studentList;
      this.p.profesorList = student.profesorList;
      //this.estudianteService.editEstudiante(student);
      /*this.estudianteService.putEditPersona(this.p).subscribe((result)=>{

      });*/
      alert(JSON.stringify(this.p));
      this.showNotification('top','right', 2, 'pe-7s-check',"Estudiante actualizado");
    }else{
      this.showNotification('top','right', 4, 'pe-7s-close-circle',"Complete todos los campos");
    }
  }

  delete(s: any){
    //this.estudianteService.deleteStudent(s.carnet);
    this.em = {};
  }

  showNotification(from, align, color,ico, mensaje){
    const type = ['','info','success','warning','danger'];

    $.notify({
      icon: ico,
      message: mensaje
    },{
      type: type[color],
      timer: 1000,
      placement: {
        from: from,
        align: align
      }
    });
  }
}
