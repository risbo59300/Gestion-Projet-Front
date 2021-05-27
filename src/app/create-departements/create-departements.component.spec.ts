import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepartementsComponent } from './create-departements.component';

describe('CreateDepartementsComponent', () => {
  let component: CreateDepartementsComponent;
  let fixture: ComponentFixture<CreateDepartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepartementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
