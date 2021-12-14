//Nombre de archivo:agenda.page.ts
//Fichero encargado de la funcionalidad de la agenda en la vista compleja
//Autor: Laura Ortiz González, Jorge Zamudio Gutiérrez
//Define el modulo de los principales componentes de la página web

import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

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
      fecha:'15-12-2021'
    },
    {
      id: '2',
      nombre: 'Tomar comanda comedor',
      fecha:'20-12-2021'
    },

  ]

  // Lista de eventos
  eventSource = [];

  // Titulo del calendario
  viewTitle: string;
 
  // Calendario
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  // Cambia de mes, semana o dia
  next() {
    this.myCal.slideNext();
  }
  back() {
    this.myCal.slidePrev();
  }

  // Cambia el titulo del calendario segun mes/semana/dia en el que estemos
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  introducirTareas(){

    var eventos=[];

    for(let tarea of this.tareas){
      var arrayFecha = tarea.fecha.split('-');
      var anio = parseInt(arrayFecha[2]);
      var mes = parseInt(arrayFecha[1]) - 1;
      var dia = parseInt(arrayFecha[0]);
      var startTime = new Date(
        Date.UTC(anio, mes, dia)
      );
      var endTime = new Date(
        Date.UTC(anio, mes, dia+1)
      );
      eventos.push({
        title: tarea.nombre,
        startTime: startTime,
        endTime: endTime,
        allDay: true,
      });
    }

    this.eventSource = eventos;
  }

  constructor() { }

  ngOnInit() {
    this.introducirTareas();
  }

}
