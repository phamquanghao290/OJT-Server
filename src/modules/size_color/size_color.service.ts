import { Injectable } from '@nestjs/common';
import { CreateSizeColorDto } from './dto/create-size_color.dto';
import { UpdateSizeColorDto } from './dto/update-size_color.dto';

@Injectable()
export class SizeColorService {
  create(createSizeColorDto: CreateSizeColorDto) {
    return 'This action adds a new sizeColor';
  }

  findAll() {
    return `This action returns all sizeColor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sizeColor`;
  }

  update(id: number, updateSizeColorDto: UpdateSizeColorDto) {
    return `This action updates a #${id} sizeColor`;
  }

  remove(id: number) {
    return `This action removes a #${id} sizeColor`;
  }
}
