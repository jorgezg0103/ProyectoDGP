import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Tutorial } from './class_tutorial';

@Component({
  selector: 'app-aniadir_tutorial',
  templateUrl: './aniadir_tutorial.page.html',
  styleUrls: ['./aniadir_tutorial.page.scss'],
})
export class Aniadir_tutorialPage implements OnInit {
  
  tutorial = new Tutorial(undefined,"","",undefined);

  constructor(public navCtrl: NavController, private http:HttpClient) {   
  }

  ngOnInit() {
  }

  public aniadir_tutorial(){
    this.http.post("http://localhost/tutoriales.php?opcion=2", this.tutorial);  
  }

}