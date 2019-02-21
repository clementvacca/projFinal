import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFormationComponent } from './module-formation.component';

describe('ModuleFormationComponent', () => {
  let component: ModuleFormationComponent;
  let fixture: ComponentFixture<ModuleFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
