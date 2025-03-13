import { PartialType } from '@nestjs/mapped-types';
import { CreateAttractionDto } from './create-attraction.dto';

export class UpdateAttractionDto extends PartialType(CreateAttractionDto) {}
