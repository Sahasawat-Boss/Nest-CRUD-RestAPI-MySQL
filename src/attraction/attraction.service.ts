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
  ) { }

  //Create
  async create(createAttractionDto: CreateAttractionDto) {
    const attraction = await this.attractionRepository.create(createAttractionDto)
    const toCreate = await this.attractionRepository.insert(attraction)
    return toCreate;
  }

  findAll() {
    return this.attractionRepository.find()
  }

  findOne(id: number) {
    return this.attractionRepository.findOneBy({ id: id })
  }

  //Update
  async update(id: number, updateAttractionDto: UpdateAttractionDto) {
    let attraction = await this.attractionRepository.findOneBy({ id });

    if (!attraction) {
      throw new Error(`Attraction with ID ${id} not found`);
    }

    attraction = { ...attraction, ...updateAttractionDto };

    // Ensure `id` is always set
    attraction.id = id;

    return await this.attractionRepository.save(attraction);
  }


  async remove(id: number) {
    const todelete = await this.attractionRepository.delete(id)
    return todelete;
  }
}

//http://localhost:3000/attraction