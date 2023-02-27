import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasCreadasComponent } from './tareas-creadas.component';

describe('TareasCreadasComponent', () => {
  let component: TareasCreadasComponent;
  let fixture: ComponentFixture<TareasCreadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasCreadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasCreadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
