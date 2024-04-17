import { Injectable } from '@nestjs/common';
import { CreateFavoriteProductDto } from './dto/create-favorite_product.dto';
import { UpdateFavoriteProductDto } from './dto/update-favorite_product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteProduct } from './entities/favorite_product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoriteProductService {
  constructor(@InjectRepository(FavoriteProduct) private readonly favoriteProductRepos: Repository<FavoriteProduct>) {}

  create(createFavoriteProductDto: CreateFavoriteProductDto) {
    return 'This action adds a new favoriteProduct';
  }

  findAll() {
    return `This action returns all favoriteProduct`; 
  }

  findOne(id: number) {
    return `This action returns a #${id} favoriteProduct`;
  }

  update(id: number, updateFavoriteProductDto: UpdateFavoriteProductDto) {
    return `This action updates a #${id} favoriteProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoriteProduct`;
  }
}
