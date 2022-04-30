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
     
  }

 alumnos: any=[];
 buffer: any=[];

  ngOnInit(): void {
   this.consultaAlumnos();
  }

    @Input() nombreAlumno: string=""
    @Input() apellidoAlumno: string=""
    @Input() matriculaAlumno: string=""

    nuevoAlumno: any = {
      nombre: "",
      apellido: "",
      matricula: ""
    }

    agregarAlumno(nuevoAlumno: any): void{
      this.db.agregarAlumno(nuevoAlumno).subscribe();
    }

    status: boolean=false;

    llaves:any=[]

    consultaAlumnos(){
      this.db.getAlumnos().subscribe(res=>{
        const alumnosRes: any= res;
        const alumnosArray=Object.keys(res).forEach((key:any)=>{
          console.log(key);
          (this.alumnos).push(alumnosRes[key]);
        })
        this.llaves=Object.keys(res);
      });
      
      
      
    }

    eliminar(id:string, alumnoBorrar: any){
      this.status=false;
      //this was for array case
      /*for(var x=id; x<this.alumnos.length; x++){
        //console.log('x: '+ x+' '+this.alumnos[x]);
        this.db.actualizarAlumno(x,this.alumnos[1+x]).subscribe();
        //console.log('x+1: '+x+' '+this.alumnos[x+1]);
        if((x+1)==this.alumnos.length){
          this.db.borrarAlumno(this.alumnos.length-1).subscribe();
          this.status=true
        }
        if(this.status){ 
          setTimeout(()=>{
            this.consultaAlumnos();
            //window.location.reload();
          },500);
        }
      }*/
      this.db.borrarAlumno(id).subscribe();
    }

}
