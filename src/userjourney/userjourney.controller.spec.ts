import { Test, TestingModule } from '@nestjs/testing';
import { UserjourneyController } from './userjourney.controller';

describe('UserjourneyController', () => {
  let controller: UserjourneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserjourneyController],
    }).compile();

    controller = module.get<UserjourneyController>(UserjourneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
