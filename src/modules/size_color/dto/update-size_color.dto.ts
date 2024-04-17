import { PartialType } from '@nestjs/mapped-types';
import { CreateSizeColorDto } from './create-size_color.dto';

export class UpdateSizeColorDto extends PartialType(CreateSizeColorDto) {}
