import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre": "José Antonio",
      "apellido": "Cano Jaramillo",
      "matricula": "ABC125"
    },
    {
      "nombre": "Braulio",
      "apellido": "Cantú de la Garza",
      "matricula": "ABC143"
    },
    {
      "nombre": "Sebastián",
      "apellido": "Córdova Ramírez",
      "matricula": "ABC243"
    },
    {
        "nombre": "Alejandra",
        "apellido": "Ochoa Castillo",
        "matricula": "ABC873"
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
