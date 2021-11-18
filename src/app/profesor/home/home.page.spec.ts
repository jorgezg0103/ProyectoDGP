<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';
=======
//Nombre de archivo:home.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Alejandro Soriano Morante
//Autor: Jesús López Rodríguez
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
>>>>>>> master

@Component({
  template: `
    <a routerLink="/profesor/opciones">link</a>
    <b routerLink="/profesor/tutoriales">link</b>
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

describe('Pruebas del Home del Profesor', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'profesor/opciones', component: DummyComponent }
        ]),
        RouterTestingModule.withRoutes([
          { path: 'profesor/tutoriales', component: DummyComponent }
         ])
      ],
      declarations: [ TestComponent, DummyComponent ]
    });
  });

  it('Desde la pantalla del Profesor se puede acceder a los Alumnos',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/profesor/opciones');
      console.log('after expect');
    });
  })));
  
  it('Desde la pantalla del Profesor se puede acceder a los Tutoriales',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('b')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/profesor/tutoriales');
      console.log('after expect');
    });
  })));

  it('Desde la pantalla del Profesor se puede acceder a los Menus',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('b')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/profesores/menu');
      console.log('after expect');
    });
  })));
});
