import { Test, TestingModule } from '@nestjs/testing';
import { UserrouteController } from './userroute.controller';

describe('UserrouteController', () => {
  let controller: UserrouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserrouteController],
    }).compile();

    controller = module.get<UserrouteController>(UserrouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
