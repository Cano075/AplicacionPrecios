import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  //get
  getAlumno(id: number){
    return this.http.get('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos/'+ id +'.json')
  }

  getAlumnos(){
    return this.http.get('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos.json')
  }
  //post

  //update
  actualizarAlumno(id: number, alumno: any){
    return this.http.put('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos/'+ id +'.json', alumno)
  }

  arreglarAlumnos(alumno:any, id:number){
    return this.http.put('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos.json'+ id +'.json', alumno)
  }
  //delete
  borrarAlumno(id: number){
    return this.http.delete('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos/'+ id +'.json')
  }
}
