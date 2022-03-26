import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { FormsModule } from '@angular/forms';

import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';
import { ActionSheetComponent } from './action-sheet/action-sheet.component';
import { ActionSheetController } from '@ionic/angular';
@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnoDetalleComponent,
    ActionSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutesModule,
    IonicModule.forRoot()
  ],
  providers: [ActionSheetController],
  bootstrap: [AppComponent],
  exports:[RoutesModule]
})
export class AppModule { }
