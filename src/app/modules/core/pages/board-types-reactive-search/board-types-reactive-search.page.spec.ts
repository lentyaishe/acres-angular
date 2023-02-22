import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTypesReactiveSearchPage } from './board-types-reactive-search.page';

describe('BoardTypesReactiveSearchComponent', () => {
  let component: BoardTypesReactiveSearchPage;
  let fixture: ComponentFixture<BoardTypesReactiveSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTypesReactiveSearchPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTypesReactiveSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
