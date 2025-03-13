import { Module } from '@nestjs/common';
import { AttractionService } from './attraction.service';
import { AttractionController } from './attraction.controller';

@Module({
  controllers: [AttractionController],
  providers: [AttractionService],
})
export class AttractionModule {}
