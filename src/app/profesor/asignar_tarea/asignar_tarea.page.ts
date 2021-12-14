import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Tarea } from './class_tarea';

@Component({
  selector: 'app-asignar_tarea',
  templateUrl: './asignar_tarea.page.html',
  styleUrls: ['./asignar_tarea.page.scss'],
})
export class Asignar_tareaPage implements OnInit {
  
  tarea = new Tarea(undefined,undefined,"","");
  //tutoriales;

  constructor(public navCtrl: NavController, private http:HttpClient) {   
  }

  ngOnInit() {
  }

  public aniadir_tarea(){
    this.http.get("http://localhost/tareas.php?opcion=2&idTarea="+this.tarea.idTarea+"&descripcion="+this.tarea.descripcion).subscribe(snap => {
      console.log(snap);
      //this.tutoriales = snap;
      this.asignar_tarea();
    });
  }

  public asignar_tarea(){
    this.http.get("http://localhost/tareas.php?opcion=3&idTarea="+this.tarea.idTarea+"&usuario="+this.tarea.usuario+"&fecha="+this.tarea.fecha).subscribe(snap => {
      console.log(snap);
    });
  }

}
