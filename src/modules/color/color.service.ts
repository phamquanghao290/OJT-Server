import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Color } from './entities/color.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColorService {
  constructor(@InjectRepository(Color) private readonly colorRepos: Repository<Color>) {}

  async create(createColorDto: CreateColorDto) {
    return this.colorRepos.save(await this.colorRepos.create(createColorDto));
  }

  async findAll() {
    return await this.colorRepos.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} color`;
  }

  async update(id: number, updateColorDto: UpdateColorDto) {
    return await this.colorRepos
      .createQueryBuilder()
      .update(Color)
      .set(updateColorDto)
      .where('colorId = :id', { id })
      .execute();
  }

  async remove(id: number) {
    return await this.colorRepos.delete(id);
  }
}
