import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NstudentComponent } from './nstudent.component';

describe('NstudentComponent', () => {
  let component: NstudentComponent;
  let fixture: ComponentFixture<NstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
