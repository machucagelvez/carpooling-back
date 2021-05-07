import { Test, TestingModule } from '@nestjs/testing';
import { UserrouteService } from './userroute.service';

describe('UserrouteService', () => {
  let service: UserrouteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserrouteService],
    }).compile();

    service = module.get<UserrouteService>(UserrouteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
