import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaCreateComponent } from './cita-create.component';

describe('CitaCreateComponent', () => {
  let component: CitaCreateComponent;
  let fixture: ComponentFixture<CitaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
