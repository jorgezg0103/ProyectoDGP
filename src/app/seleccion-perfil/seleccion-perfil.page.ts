import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-perfil',
  templateUrl: './seleccion-perfil.page.html',
  styleUrls: ['./seleccion-perfil.page.scss'],
})
export class SeleccionPerfilPage implements OnInit {

  private perfiles = [
    {
      id: '1',
      nombre: 'Alumno',
      tipo: 'alumno',
      home: '/alumno/home',
      imageURL: 'https://image.flaticon.com/icons/png/512/257/257651.png',
    },
    {
      id: '2',
      nombre: 'Profesor',
      tipo: 'profesor',
      home: '/profesor/home',
      imageURL: 'https://cdn-icons-png.flaticon.com/512/2321/2321041.png',
    },
    {
      id: '3',
      nombre: 'Alumno2',
      tipo: 'alumno',
      home: '/alumno/home',
      imageURL: 'https://image.flaticon.com/icons/png/512/257/257651.png',
    },
    {
      id: '4',
      nombre: 'Alumno3',
      tipo: 'alumno',
      home: '/alumno/home',
      imageURL: 'https://image.flaticon.com/icons/png/512/257/257651.png',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
