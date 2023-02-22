import { TestBed } from '@angular/core/testing';

import { BoardTypesReactiveService } from './board-types-reactive.service';

describe('BoardTypesReactiveService', () => {
  let service: BoardTypesReactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardTypesReactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
