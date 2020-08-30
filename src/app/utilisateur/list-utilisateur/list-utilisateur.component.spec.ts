import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtilisateurComponent } from './list-utilisateur.component';

describe('ListUtilisateurComponent', () => {
  let component: ListUtilisateurComponent;
  let fixture: ComponentFixture<ListUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
