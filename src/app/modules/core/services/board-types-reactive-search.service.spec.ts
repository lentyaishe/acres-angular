import { TestBed } from '@angular/core/testing';

import { BoardTypesReactiveSearchService } from './board-types-reactive-search.service';

describe('BoardTypesReactiveSearchService', () => {
  let service: BoardTypesReactiveSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardTypesReactiveSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
