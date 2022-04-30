import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDatabase, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  //get
  getAlumno(id: string){
    return this.http.get('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos/'+ id +'.json')
  }

  getAlumnos(){
    return this.http.get('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos.json')
  }
  //post
  agregarAlumno(nuevoAlumno: any){
    return this.http.post('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos.json', nuevoAlumno)
  }
  //update
  actualizarAlumno(id: string, alumno: any){
    return this.http.put('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos/'+ id +'.json', alumno)
  }

  arreglarAlumnos(alumno:any, id:string){
    return this.http.put('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos.json'+ id +'.json', alumno)
  }
  //delete
  borrarAlumno(id: string){
    return this.http.delete('https://alumnos-59d84-default-rtdb.firebaseio.com/alumnos/'+ id +'.json')
  }
}
