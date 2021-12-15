import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Tutorial } from './class_tutorial';

@Component({
  selector: 'app-eliminar_tutorial',
  templateUrl: './eliminar_tutorial.page.html',
  styleUrls: ['./eliminar_tutorial.page.scss'],
})
export class Eliminar_tutorialPage implements OnInit {
  tutorial = new Tutorial(undefined);
  tutoriales;

  constructor(public navCtrl: NavController, private http:HttpClient) {   
  }

  ngOnInit() {
  }

  public eliminar(){
    this.http.get("http://localhost/tutoriales.php?opcion=3&idTutorial="+this.tutorial.idTutorial).subscribe(snap => {
      console.log(snap);
      this.tutoriales = snap;
    });
  }

}
