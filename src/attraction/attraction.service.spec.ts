import { Test, TestingModule } from '@nestjs/testing';
import { AttractionService } from './attraction.service';

describe('AttractionService', () => {
  let service: AttractionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttractionService],
    }).compile();

    service = module.get<AttractionService>(AttractionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
