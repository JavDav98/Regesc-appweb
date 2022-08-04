import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcursoComponent } from './editcurso.component';

describe('EditcursoComponent', () => {
  let component: EditcursoComponent;
  let fixture: ComponentFixture<EditcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
