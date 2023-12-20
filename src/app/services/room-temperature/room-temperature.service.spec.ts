import { TestBed } from '@angular/core/testing';

import { RoomTemperatureService } from './room-temperature.service';

describe('RoomTemperatureService', () => {
  let service: RoomTemperatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomTemperatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
