import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPretComponent } from './add-pret.component';

describe('AddPretComponent', () => {
  let component: AddPretComponent;
  let fixture: ComponentFixture<AddPretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
