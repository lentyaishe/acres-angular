import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Page } from './page2.page';

describe('Page2Component', () => {
  let component: Page2Page;
  let fixture: ComponentFixture<Page2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2Page ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
