import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private db: DatabaseService) { }

 alumnos: any=[];
  ngOnInit(): void {
   this.consultaAlumnos();
  }

    @Input() nombreAlumno: string=""
    @Input() apellidoAlumno: string=""
    @Input() matriculaAlumno: string=""

    agregarAlumno(): void{
      var nuevoAlumno: any = {
        "nombre": this.nombreAlumno,
        "apellido": this.apellidoAlumno,
        "matricula": this.matriculaAlumno
      }
      this.alumnos.push(nuevoAlumno)
    }

    consultaAlumnos(){
      this.db.getAlumnos().subscribe(res=>{
        this.alumnos=res;
      });
    }
    
}
