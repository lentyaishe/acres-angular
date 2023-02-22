import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhandledErrorPage } from './unhandled-error.page';

describe('UnhandledErrorComponent', () => {
  let component: UnhandledErrorPage;
  let fixture: ComponentFixture<UnhandledErrorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnhandledErrorPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnhandledErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
