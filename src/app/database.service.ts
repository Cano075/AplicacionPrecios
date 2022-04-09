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


  //delete

}
