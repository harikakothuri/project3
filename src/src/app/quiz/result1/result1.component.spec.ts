import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Result1Component } from './result1.component';

describe('Result1Component', () => {
  let component: Result1Component;
  let fixture: ComponentFixture<Result1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Result1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Result1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
