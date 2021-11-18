<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';
=======
//Nombre de archivo: home.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Jesús López Rodríguez
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
>>>>>>> master

@Component({
  template: `
    <a routerLink="/alumno/vista_media/menu">link</a>
    <b routerLink="/alumno/vista_media/tutoriales">link</b>
    <router-outlet></router-outlet>
  `
})
class TestComponent {
  collName = 'testing';
}

@Component({
  template: ''
})
class DummyComponent {
}

describe('Pruebas del Home del Alumno Vista Media', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'alumno/vista_media/menu', component: DummyComponent }
        ]),
        RouterTestingModule.withRoutes([
          { path: 'alumno/vista_media/tutoriales', component: DummyComponent }
         ])
      ],
      declarations: [ TestComponent, DummyComponent ]
    });
  });

  it('Desde la pantalla del Alumno Vista Media se puede acceder a los menus',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/alumno/vista_media/menu');
      console.log('after expect');
    });
  })));
  
  it('Desde la pantalla del Alumno Vista Media se puede acceder a los Tutoriales',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('b')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/alumno/vista_media/tutoriales');
      console.log('after expect');
    });
  })));
});

