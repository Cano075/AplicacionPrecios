import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
        "nombre": "Abraham",
        "apellido": "Ramirez",
        "matricula": "ABC123"
    }
  ]
  ngOnInit(): void {
  }

}
