import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiairesFormationComponent } from './stagiaires-formation.component';

describe('StagiairesFormationComponent', () => {
  let component: StagiairesFormationComponent;
  let fixture: ComponentFixture<StagiairesFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagiairesFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiairesFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
