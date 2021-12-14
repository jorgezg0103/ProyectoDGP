//Nombre de archivo:agenda.page.ts
//Fichero encargado de la funcionalidad de la agenda en la vista compleja
//Autor: Laura Ortiz González, Jorge Zamudio Gutiérrez
//Define el modulo de los principales componentes de la página web

import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

<<<<<<< HEAD
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

//import { ActivatedRoute } from '@angular/router';


=======
>>>>>>> 7da3cd36b6831ce6397558098b59823cc43cf4fb
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  pagina_actual: number = 1;

  usuario = "ElJorges";

  tareas;

  /*private tareas = [
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

  ]*/

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

<<<<<<< HEAD
  /*createRandomEvents() {
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
  }*/

=======
>>>>>>> 7da3cd36b6831ce6397558098b59823cc43cf4fb
  introducirTareas(){

    var eventos=[];

    for(let tarea of this.tareas){
<<<<<<< HEAD
      //var startTime = new Date('15-12-2021');
      var year_str = tarea.fecha.substr(0,4);
      //console.log(year_str);
      var month_str = tarea.fecha.substr(5,2);
      //console.log(month_str);
      var day_str = tarea.fecha.substr(8,2);
      //console.log(day_str);

      var startTime = new Date(
        Date.UTC(
          parseInt(year_str, 10),
          parseInt(month_str, 10)-1,
          parseInt(day_str, 10)
        )
      );
      //var endTime = new Date('16-12-2021');
      var endTime = new Date(
        Date.UTC(
          parseInt(year_str, 10),
          parseInt(month_str, 10)-1,
          parseInt(day_str, 10)+1
        )
      );
      eventos.push({
        title: tarea.descripcion,
=======
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
>>>>>>> 7da3cd36b6831ce6397558098b59823cc43cf4fb
        startTime: startTime,
        endTime: endTime,
        allDay: true,
      });

    }

    this.eventSource = eventos;
  }

  constructor(public navCtrl: NavController, private http:HttpClient) {
    this.http.get("http://localhost/alumnos.php?opcion=2&usuario="+this.usuario).subscribe(snap => {
      console.log(snap);
      this.tareas = snap;
      this.introducirTareas();
    });

    
  }

  ngOnInit() {
<<<<<<< HEAD
    //this.createRandomEvents();
    //this.introducirTareas();
=======
    this.introducirTareas();
>>>>>>> 7da3cd36b6831ce6397558098b59823cc43cf4fb
  }

}
