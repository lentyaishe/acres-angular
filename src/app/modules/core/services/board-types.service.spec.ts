import { TestBed } from '@angular/core/testing';

import { BoardTypesService } from './board-types.service';

describe('BoardTypesService', () => {
  let service: BoardTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
