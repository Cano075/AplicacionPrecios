import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit, OnChanges {

  constructor(private ruta: ActivatedRoute, private db: DatabaseService) { }

  ngOnInit(): void {
    //this.getAlumnoDetalle(this.matricula);
    this.getAlumno(this.id);
  }

  ngOnChanges(): void{
    //this.getAlumnoDetalle(this.matricula);
  }

  id: number = this.ruta.snapshot.params['index'];

  alumnoDetalle: any={
  }

  matricula: string=this.ruta.snapshot.params['id'];

  /* getAlumnoDetalle(matricula: string): any{
    for(let i=0; i<this.alumnos.length; i++){
      if(this.alumnos[i].matricula==this.matricula){
        this.alumnoDetalle=this.alumnos[i];
      }
    }
    return this.alumnoDetalle;
  } */
  getAlumno(id: number){
    this.db.getAlumno(id).subscribe(res =>{
      this.alumnoDetalle=res;
    });
  }
}
