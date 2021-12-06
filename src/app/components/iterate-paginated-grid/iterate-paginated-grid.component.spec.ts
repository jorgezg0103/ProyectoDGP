import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IteratePaginatedGridComponent } from './iterate-paginated-grid.component';

describe('IteratePaginatedGridComponent', () => {
  let component: IteratePaginatedGridComponent;
  let fixture: ComponentFixture<IteratePaginatedGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IteratePaginatedGridComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IteratePaginatedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
