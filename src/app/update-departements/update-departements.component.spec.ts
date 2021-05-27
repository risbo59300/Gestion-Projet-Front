import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartementsComponent } from './update-departements.component';

describe('UpdateDepartementsComponent', () => {
  let component: UpdateDepartementsComponent;
  let fixture: ComponentFixture<UpdateDepartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDepartementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
