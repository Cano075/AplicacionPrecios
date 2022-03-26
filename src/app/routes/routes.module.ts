import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoDetalleComponent } from '../alumno-detalle/alumno-detalle.component';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from '../alumnos/alumnos.component';

const rutas: Routes = [
  { path: 'alumno-detalle/:id', component: AlumnoDetalleComponent },
  { path: '', component: AlumnosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RoutesModule { }
