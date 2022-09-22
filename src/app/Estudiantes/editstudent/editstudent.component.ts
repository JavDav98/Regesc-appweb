import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EstudianteService} from "../../Services/estudiante.service";
import {NgForm} from "@angular/forms";
import {DatePipe} from "@angular/common";

declare var $:any;

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {
  public em: any = {};
  public p: any = {};
  public f: string;

  constructor(private rutaActiva: ActivatedRoute,
              private estudianteService: EstudianteService,
              private rout: Router,
              private datepipe: DatePipe) {


  }

  ngOnInit(): void {
    let idCui = this.rutaActiva.snapshot.paramMap.get('id');
    try{
      this.estudianteService.getEstudiantesDatosInd(+idCui).subscribe(result=>{
        this.em = result;
        //const [day, month, year] = result.nacimiento.toString().split('-');
        //const [year, month, day] = result.nacimiento.toString().split('-');
        //this.em.nacimiento = new Date(+year, +month - 1, +day);
        this.em = Object.assign(this.em, result.students[0]);
        /*let daystring: string = '';
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
        let yearstring = year;*/
        //this.em.fecha = `${year}-${month}-${day} year-month-day`;
        //this.em.fecha = year+'-'+month+'-'+day;
        this.em.fecha = this.datepipe.transform(this.em.nacimiento, 'yyyy-MM-dd');
      })
    }catch (e){
      console.log(`Error: ${e}`)
    }
  }

  submit(formStudent: NgForm, student: any){
    if (formStudent.valid){
      const [year, month, day] = student.fecha.split('-');
      //this.em.nacimiento = new Date(+year, +month - 1, +day);
      this.p.nacimiento = new Date(+year, +month - 1, +day);
      this.p.cui = student.cui;
      this.p.nombre = student.nombre;
      this.p.apellido = student.apellido;
      this.p.email = student.email;
      this.p.telefono = student.telefono;
      this.p.direccion = student.direccion;
      this.p.studentList = [];
      this.p.profesorList = [];
      alert(JSON.stringify(this.p))
      this.estudianteService.putEditPersona(this.p).subscribe((result)=>{

      });
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
