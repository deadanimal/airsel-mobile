import { TestBed } from '@angular/core/testing';

import { WorkCategoryService } from './work-categories.service';

describe('WorkCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkCategoryService = TestBed.get(WorkCategoryService);
    expect(service).toBeTruthy();
  });
});
