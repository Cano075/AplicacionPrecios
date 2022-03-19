import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123"
    },
    {
        "nombre": "Abraham",
        "apellido": "Ramirez",
        "matricula": "ABC123"
    }
  ]
  ngOnInit(): void {
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
}
