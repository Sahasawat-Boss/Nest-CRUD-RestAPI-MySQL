import { Test, TestingModule } from '@nestjs/testing';
import { AttractionController } from './attraction.controller';
import { AttractionService } from './attraction.service';

describe('AttractionController', () => {
  let controller: AttractionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttractionController],
      providers: [AttractionService],
    }).compile();

    controller = module.get<AttractionController>(AttractionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
