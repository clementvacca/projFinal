import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AoduleenseignementlistAbsolueComponent } from './aoduleenseignementlist-absolue.component';

describe('AoduleenseignementlistAbsolueComponent', () => {
  let component: AoduleenseignementlistAbsolueComponent;
  let fixture: ComponentFixture<AoduleenseignementlistAbsolueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AoduleenseignementlistAbsolueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AoduleenseignementlistAbsolueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
