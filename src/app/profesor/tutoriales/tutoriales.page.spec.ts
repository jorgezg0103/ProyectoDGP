<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';
=======
//Nombre de archivo: tutoriales.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Jesús López Rodríguez
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
>>>>>>> master

@Component({
  template: `
    <a routerLink="/perfil.home">link</a>
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

describe('Prueba de la pantalla de Tutoriales de Profesor', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'perfil.home', component: DummyComponent }
        ])
      ],
      declarations: [ TestComponent, DummyComponent ]
    });
  });

  it('Desde la pantalla de tutoriales de Profesor se puede volver al Home',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/perfil.home');
      console.log('after expect');
    });
  })));
});

