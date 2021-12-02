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
      fecha:'16-12-2021'
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

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i++) {
      var date = new Date();
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;

      startTime = new Date(
        Date.UTC(
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate() + startDay
        )
      );
      if (endDay === startDay) {
        endDay += 1;
      }
      endTime = new Date(
        Date.UTC(
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate() + endDay
        )
      );
      events.push({
        title: 'Evento ' + i,
        startTime: startTime,
        endTime: endTime,
        allDay: true,
      });
       
    }
    this.eventSource = events;
  }

  introducirTareas(){

    var eventos=[];
    for(let tarea of this.tareas){
      var startTime = new Date('15-12-2021');
      var endTime = new Date('16-12-2021');
      eventos.push({
        title: tarea.nombre + tarea.id,
        startTime: startTime,
        endTime: endTime,
        allDay: true,
      });
    }
    this.eventSource = eventos;
  }

  constructor() { }

  ngOnInit() {
    //this.createRandomEvents();
    this.introducirTareas();
  }

}
