import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.page.html',
  styleUrls: ['./tutoriales.page.scss'],
})
export class TutorialesPage implements OnInit {

  private tutoriales = [
    {
      id: '1',
      nombre: 'T1',
      descripcion: 'Aqui va el tutorial 1',
    },
    {
      id: '2',
      nombre: 'T2',
      descripcion: 'Aqui va el tutorial 2',
    },
    {
      id: '3',
      nombre: 'T3',
      descripcion: 'Aqui va el tutorial 3',
    },
    {
      id: '4',
      nombre: 'T4',
      descripcion: 'Aqui va el tutorial 4',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
