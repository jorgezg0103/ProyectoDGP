import { Component, OnInit } from '@angular/core';
import { PaginationSizeBasedService } from '../services/pagination-size-based.service'

@Component({
  selector: 'app-seleccion-perfil',
  templateUrl: './seleccion-perfil.page.html',
  styleUrls: ['./seleccion-perfil.page.scss'],
})
export class SeleccionPerfilPage implements OnInit {

  pagina_actual: number = 1;
  itemsPerPage:number=2;

  private perfiles = [
    {
      id: '1',
      nombre: 'Alumno Vista Basica',
      tipo: 'alumno',
      home: '/alumno/vista_basica/home',
      imageURL: 'https://image.flaticon.com/icons/png/512/257/257651.png',
    },
    {
      id: '2',
      nombre: 'Profesor',
      tipo: 'profesor',
      home: '/profesor/inicio',
      imageURL: 'https://cdn-icons-png.flaticon.com/512/2321/2321041.png',
    },
    {
      id: '3',
      nombre: 'Alumno Vista Media',
      tipo: 'alumno',
      home: '/alumno/vista_media/home',
      imageURL: 'https://image.flaticon.com/icons/png/512/257/257651.png',
    },
    {
      id: '4',
      nombre: 'Alumno Vista Compleja',
      tipo: 'alumno',
      home: '/alumno/vista_compleja/home',
      imageURL: 'https://image.flaticon.com/icons/png/512/257/257651.png',
    }
  ]

  constructor(private paginationManager:PaginationSizeBasedService) { }

  ngOnInit() {
    // this.itemsPerPage=this.paginationManager.adjustPagination(this.perfiles.length); //Esto da error la primera vez que se ejecuta pero no en reload no entiendo
  }

}
