//Nombre de archivo:agenda.page.ts
//Fichero encargado de la funcionalidad de la agenda en la vista compleja
//Autor: Laura Ortiz González, Jorge Zamudio Gutiérrez
//Define el modulo de los principales componentes de la página web

import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

import { ActivatedRoute, Router } from '@angular/router';

import { ObtenerNombreService } from 'src/app/services/obtener-nombre.service';


//import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  pagina_actual: number = 1;

  usuario = "ElJorges";
  nombreUsuario = "Jorge";

  tareas;

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

  // Funcion que se activa cuando se selecciona un evento determinado
  onEventSelected = (event) => {

    if(event.title == "Tomar comanda comedor"){
      this.router.navigate(["../../comanda"], {relativeTo:this.route});
    }
    else{
      this.nombreServicio.setNombre(event.title);
      this.router.navigate(["../lista_tutoriales"], {relativeTo:this.route});
    }

  };

  introducirTareas(){

    var eventos=[];
    for(let tarea of this.tareas){
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
        startTime: startTime,
        endTime: endTime,
        allDay: true,
      });

    }
    this.eventSource = eventos;
  }

  constructor(public navCtrl: NavController, private http:HttpClient, 
    private router:Router, private route:ActivatedRoute, private nombreServicio:ObtenerNombreService) {
    this.http.get("http://localhost/alumnos.php?opcion=2&usuario="+this.usuario).subscribe(snap => {
      console.log(snap);
      this.tareas = snap;
      this.introducirTareas();
    });

    
  }

  ngOnInit() {
    //this.createRandomEvents();
    //this.introducirTareas();
  }

}
