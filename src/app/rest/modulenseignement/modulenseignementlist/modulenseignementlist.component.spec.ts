import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulenseignementlistComponent } from './modulenseignementlist.component';

describe('ModulenseignementlistComponent', () => {
  let component: ModulenseignementlistComponent;
  let fixture: ComponentFixture<ModulenseignementlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulenseignementlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulenseignementlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
