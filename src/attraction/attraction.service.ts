import { Injectable } from '@nestjs/common';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attraction } from './entities/attraction.entity';

@Injectable()
export class AttractionService {
  constructor(
    @InjectRepository(Attraction)
    private attractionRepository: Repository<Attraction>,
  ){}

  async create(createAttractionDto: CreateAttractionDto) {
    const attraction = await this.attractionRepository.create(createAttractionDto)
    const toCreate = await this.attractionRepository.insert(attraction)
    return toCreate;
  }

  findAll() {
    return this.attractionRepository.find()
  }

  findOne(id: number) {
    return this.attractionRepository.findOneBy({id:id})
  }

  update(id: number, updateAttractionDto: UpdateAttractionDto) {
    const existingAttraction = await this.attractionRepository.findOneBy({ id:id })
    attraction = {
     //30
    }
  }

  remove(id: number) {
    return `This action removes a #${id} attraction`;
  }
}

//http://localhost:3000/attraction