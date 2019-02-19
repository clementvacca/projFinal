import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulenseignementComponent } from './modulenseignement.component';

describe('ModulenseignementComponent', () => {
  let component: ModulenseignementComponent;
  let fixture: ComponentFixture<ModulenseignementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulenseignementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulenseignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
