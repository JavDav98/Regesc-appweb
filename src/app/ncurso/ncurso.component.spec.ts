import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcursoComponent } from './ncurso.component';

describe('NcursoComponent', () => {
  let component: NcursoComponent;
  let fixture: ComponentFixture<NcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
