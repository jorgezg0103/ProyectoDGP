//Nombre de archivo:agenda.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Miguel Carracedo Rodríguez
//Define el modulo de los principales componentes de la página web

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  pagina_actual: number = 1;

  private tareas = [
    {
      id: '1',
      nombre: 'Poner el microondas',
      imageURL: '../../../../assets/microwave.png',
    },
    {
      id: '2',
      nombre: 'Tomar comanda comedor',
      imageURL: 'https://icon-library.com/images/icon-plus/icon-plus-28.jpg',
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
