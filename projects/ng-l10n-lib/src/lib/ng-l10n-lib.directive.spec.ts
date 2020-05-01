import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { NgL10nLibDirective } from './ng-l10n-lib.directive';

describe('NgL10nLibComponent', () => {
  let component: NgL10nLibDirective;
  let fixture: ComponentFixture<NgL10nLibDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgL10nLibDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgL10nLibDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
