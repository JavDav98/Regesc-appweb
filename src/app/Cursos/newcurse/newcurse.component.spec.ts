import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcurseComponent } from './newcurse.component';

describe('NewcurseComponent', () => {
  let component: NewcurseComponent;
  let fixture: ComponentFixture<NewcurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
