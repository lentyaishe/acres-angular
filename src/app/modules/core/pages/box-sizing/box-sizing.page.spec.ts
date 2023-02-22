import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BoxSizingPage } from "./box-sizing.page";

describe("BoxSizingPage", () => {
  let component: BoxSizingPage;
  let fixture: ComponentFixture<BoxSizingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSizingPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxSizingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
