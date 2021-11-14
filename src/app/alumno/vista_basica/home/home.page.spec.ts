import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';

@Component({
  template: `
    <a routerLink="/alumno/vista_basica/menu">link</a>
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

describe('Pruebas del Home del Alumno Vista Basica', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'alumno/vista_basica/menu', component: DummyComponent }
        ])
      ],
      declarations: [ TestComponent, DummyComponent ]
    });
  });

  it('Desde la pantalla del Alumno Vista Básica se puede acceder a los menus',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/alumno/vista_basica/menu');
      console.log('after expect');
    });
  })));
});
