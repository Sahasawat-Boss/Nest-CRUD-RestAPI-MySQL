import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttractionService } from './attraction.service';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';

@Controller('attraction')
export class AttractionController {
  constructor(private readonly attractionService: AttractionService) {}

  @Post()
  create(@Body() createAttractionDto: CreateAttractionDto) {
    return this.attractionService.create(createAttractionDto);
  }

  @Get()
  findAll() {
    return this.attractionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attractionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttractionDto: UpdateAttractionDto) {
    return this.attractionService.update(+id, updateAttractionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attractionService.remove(+id);
  }
}

//http://localhost:3000/attraction