import { Test, TestingModule } from '@nestjs/testing';
import { UserjourneyService } from './userjourney.service';

describe('UserjourneyService', () => {
  let service: UserjourneyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserjourneyService],
    }).compile();

    service = module.get<UserjourneyService>(UserjourneyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
