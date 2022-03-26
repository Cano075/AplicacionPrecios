import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit, OnChanges {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAlumnoDetalle(this.matricula);
  }

  ngOnChanges(): void{
    this.getAlumnoDetalle(this.matricula);
  }

  alumnos=[
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


  alumnoDetalle: any={

  }

  matricula: string=this.ruta.snapshot.params['id'];

  getAlumnoDetalle(matricula: string): any{
    for(let i=0; i<this.alumnos.length; i++){
      if(this.alumnos[i].matricula==this.matricula){
        this.alumnoDetalle=this.alumnos[i];
      }
    }
    return this.alumnoDetalle;
  }

}
