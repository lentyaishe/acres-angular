import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTypesReactivePage } from './board-types-reactive.page';

describe('BoardTypesReactiveComponent', () => {
  let component: BoardTypesReactivePage;
  let fixture: ComponentFixture<BoardTypesReactivePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTypesReactivePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTypesReactivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
