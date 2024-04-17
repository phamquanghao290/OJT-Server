import { Injectable } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Size } from './entities/size.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SizeService {
  constructor(@InjectRepository(Size) private readonly sizeRepos: Repository<Size>) {}

  async create(createSizeDto: CreateSizeDto) {
    return this.sizeRepos.save(await this.sizeRepos.create(createSizeDto));
  }

  async findAll() {
    return await this.sizeRepos.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} size`;
  }

  async update(id: number, updateSizeDto: UpdateSizeDto) {
    return await this.sizeRepos
      .createQueryBuilder()
      .update(Size)
      .set(updateSizeDto)
      .where('sizeId = :id', { id })
      .execute();
  }

  async remove(id: number) {
    return await this.sizeRepos.delete(id);
  }
}
