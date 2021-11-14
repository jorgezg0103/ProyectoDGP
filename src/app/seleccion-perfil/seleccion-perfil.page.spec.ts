import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';

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

describe('Pruebas de la pantalla de Selección de Perfil', function () {
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

  it('Desde la pantalla inicial se puede acceder al Home de cualquier usuario',
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
