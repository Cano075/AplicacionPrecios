import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { ThisReceiver } from '@angular/compiler';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Alumno } from '../models/alumno';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnChanges {

  constructor(private db: DatabaseService) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

 alumnos: Alumno[]=[];
 buffer: any=[];
 datos: any= {
  nombre: "",
  apellido: "",
  matricula: ""
}


ALUMNOS: Alumno[]=[]; //arreglo ordenado
private alumnoBuscado: string ="";

get buscarAlumno(): string {
  return this.alumnoBuscado;
}
buscaAlumno(filtrarPorNombre: string): Alumno[] {
  filtrarPorNombre = filtrarPorNombre.toLocaleLowerCase();
  return this.alumnos.filter((alumno: Alumno) => alumno.nombre.toLocaleLowerCase().includes(filtrarPorNombre));
}
set buscarAlumno(nombre: string){
  this.alumnoBuscado = nombre;
  this.ALUMNOS=this.buscaAlumno(nombre);
  console.log(this.ALUMNOS);
}
  ngOnInit(): void {
    this.consultaAlumnos();

    
    
    this.datos=new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      matricula: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(7)])
    });
  }

    @Input() nombreAlumno: string=""
    @Input() apellidoAlumno: string=""
    @Input() matriculaAlumno: string=""



    desplegarLista(){
      this.consultaAlumnos();
    }

    agregarAlumno(): void{
      this.db.agregarAlumno(this.datos.value).subscribe();
      console.log('agregado');
      setTimeout(()=>{
        this.consultaAlumnos();
        window.location.reload();
      },500);

    }

    status: boolean=false;

    llaves:any=[]

    consultaAlumnos(){
      this.db.getAlumnos().subscribe(res=>{
        const alumnosRes: any= res;
        const alumnosArray=Object.keys(res).forEach((key:any)=>{
          console.log(key);
          if(alumnosRes[key]!=null){
          (this.alumnos).push(alumnosRes[key]);
          (this.llaves).push(key);
          }
        })
        for(let i=0; i<this.alumnos.length;i++){
          this.alumnos[i].indice=this.llaves[i];
        }
      });
      console.log(this.alumnos);
      this.db.getAlumnos().subscribe(res=>{
        const llaves=this.alumnos.forEach(element =>{
          //this.alumnos[].indice=
        })
      });
      
    }

    eliminar(id:string, alumnoBorrar: any){
      this.status=false;
      this.db.borrarAlumno(id).subscribe();
      console.log("borrado");
      setTimeout(()=>{
        this.consultaAlumnos();
        window.location.reload();
      },500);
    }

    //
    buscar($event: Event) { //evento de escribir en el input pero no hace la busqueda
    console.log(this.buscarAlumno, "evento");


    //this.$alumnos = this.alumnos.filter( nombreAlumno => nombreAlumno['nombre'].includes(this.hola))

  }
    guardar(){
      /*this.db.agregarAlumno(this.nuevoAlumno).subscribe(res=>{
        console.log("Guardado");
      })*/
      
    }
}
