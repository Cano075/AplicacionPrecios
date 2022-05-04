import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { ThisReceiver } from '@angular/compiler';
import { FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnChanges {

  constructor(private db: DatabaseService) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

 alumnos: any=[];
 buffer: any=[];
 datos: any= {
  nombre: "",
  apellido: "",
  matricula: ""
}
  ngOnInit(): void {
    this.desplegarLista();

    
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
        
      });
      console.log(this.llaves);
      
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

    guardar(){
      /*this.db.agregarAlumno(this.nuevoAlumno).subscribe(res=>{
        console.log("Guardado");
      })*/
      
    }
}
