import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnChanges {

  constructor(private db: DatabaseService) { }

  ngOnChanges(changes: SimpleChanges): void {
      
      this.consultaAlumnos();
      window.location.reload();
  }

 alumnos: any=[];
 buffer: any=[];

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

    status: boolean=false;

    consultaAlumnos(){
      this.db.getAlumnos().subscribe(res=>{
        this.alumnos=res;
      });
      
    }

    eliminar(id:number, alumnoBorrar: any){
      this.status=false;
      /*this.db.borrarAlumno(id).subscribe(res=>{
        console.log('Finished')
        this.status=true;
      });
      */
      for(var x=id; x<this.alumnos.length; x++){
        console.log('x: '+ x+' '+this.alumnos[x]);
        this.db.actualizarAlumno(x,this.alumnos[1+x]).subscribe();
        console.log('x+1: '+x+' '+this.alumnos[x+1]);
        if((x+1)==this.alumnos.length){
          this.db.borrarAlumno(this.alumnos.length-1).subscribe();
          console.log(this.alumnos.length-1);
          this.status=true
        }
        if(this.status){
          this.consultaAlumnos();
        }
      }
    }

}
