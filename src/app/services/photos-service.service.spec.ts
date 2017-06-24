import { TestBed, inject } from '@angular/core/testing';

import { PhotosServiceService } from './photos-service.service';

describe('PhotosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosServiceService]
    });
  });

  it('should be created', inject([PhotosServiceService], (service: PhotosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
