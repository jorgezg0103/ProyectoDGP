import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerNombreService {

  constructor() { }

  nombreTutorial = "";

  getNombre(){
    return this.nombreTutorial;
  }

  setNombre(nombre){
    this.nombreTutorial = nombre;
  }

}
