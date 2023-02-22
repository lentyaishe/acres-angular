import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BoardTypesReactiveCachedPage } from "./board-types-reactive-cached.page";

describe("BoardTypesReactiveCachedPage", () => {
  let component: BoardTypesReactiveCachedPage;
  let fixture: ComponentFixture<BoardTypesReactiveCachedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTypesReactiveCachedPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTypesReactiveCachedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
