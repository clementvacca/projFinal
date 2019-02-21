import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixmoduleComponent } from './choixmodule.component';

describe('ChoixmoduleComponent', () => {
  let component: ChoixmoduleComponent;
  let fixture: ComponentFixture<ChoixmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
