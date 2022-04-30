import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit, OnChanges {

  constructor(private ruta: ActivatedRoute, private db: DatabaseService,public actionSheetController: ActionSheetController) { }

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

  editando = false;

  editar(){
    this.editando=true;
  }

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

  alumnoEditado: any ={
    nombre: "",
    matricula: "",
    apellido: ""

  }

  guardar(){
    this.db.actualizarAlumno(this.id,this.alumnoEditado).subscribe(res=>{
      console.log(res);
    })
    this.editando=false;
  }


  //ActionSheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Copiar',
        icon: 'copy',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Editar',
        icon: 'create',
        data: 10,
        handler: () => {
          this.editar();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        } 
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
