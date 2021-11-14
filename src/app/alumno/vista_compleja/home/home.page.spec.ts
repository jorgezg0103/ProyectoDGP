import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';

@Component({
  template: `
    <a routerLink="/alumno/vista_compleja/menu">link</a>
    <b routerLink="/alumno/vista_compleja/tutoriales">link</b>
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

describe('Pruebas del Home del Alumno Vista Compleja', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'alumno/vista_compleja/menu', component: DummyComponent }
        ]),
        RouterTestingModule.withRoutes([
          { path: 'alumno/vista_compleja/tutoriales', component: DummyComponent }
         ])
      ],
      declarations: [ TestComponent, DummyComponent ]
    });
  });

  it('Desde la pantalla del Alumno Vista Compleja se puede acceder al menu',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/alumno/vista_compleja/menu');
      console.log('after expect');
    });
  })));
  
  it('Desde la pantalla del Alumno Vista Compleja se puede acceder a los Tutoriales',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('b')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/alumno/vista_compleja/tutoriales');
      console.log('after expect');
    });
  })));
});

