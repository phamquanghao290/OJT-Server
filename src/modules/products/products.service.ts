import { Body, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private readonly productRepos: Repository<Product>) {}

  async create(createProductDto: any) {
    console.log(createProductDto);
    const newProduct = await this.productRepos
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values({
        nameProduct: createProductDto.nameProduct,
        price: createProductDto.price,
        image: createProductDto.image,
        stock: createProductDto.stock,
        rate: createProductDto.rate,
        category: createProductDto.category_id,
        brand: createProductDto.brand_id,
      })
      .execute();
  }

  async findAll() {
    return await this.productRepos
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.brand', 'brand')
      .getMany();
  }

  async findOne(id: number) {
    return await this.productRepos.findOne({where: {id}});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updateProduct = await this.productRepos
      .createQueryBuilder()
      .update(Product)
      .set({
        nameProduct: updateProductDto.nameProduct,
        price: updateProductDto.price,
        image: updateProductDto.image,
        stock: updateProductDto.stock,
        rate: updateProductDto.rate,
        category: updateProductDto.category_id as any,
        brand: updateProductDto.brand_id as any,
      })
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    return await this.productRepos.delete(id);
  }
}
