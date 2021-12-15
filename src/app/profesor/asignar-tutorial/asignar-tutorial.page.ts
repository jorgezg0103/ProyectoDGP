import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Explica } from './explica_class';

@Component({
  selector: 'app-asignar-tutorial',
  templateUrl: './asignar-tutorial.page.html',
  styleUrls: ['./asignar-tutorial.page.scss'],
})
export class AsignarTutorialPage implements OnInit {

  explica = new Explica(undefined,undefined);
  constructor(public navCtrl: NavController, private http:HttpClient) {   
  }

  ngOnInit() {
  }

  public asignar_tutorial(){
    this.http.get("http://localhost/tareas.php?opcion=4&idTarea="+this.explica.idTarea+"&idTutorial="+this.explica.idTutorial).subscribe(snap => {
      console.log(snap);
    });
  }

}
