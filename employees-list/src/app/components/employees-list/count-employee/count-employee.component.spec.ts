import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmployeeComponent } from './count-employee.component';

describe('CountEmployeeComponent', () => {
  let component: CountEmployeeComponent;
  let fixture: ComponentFixture<CountEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
