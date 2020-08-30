import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPretComponent } from './list-pret.component';

describe('ListPretComponent', () => {
  let component: ListPretComponent;
  let fixture: ComponentFixture<ListPretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
