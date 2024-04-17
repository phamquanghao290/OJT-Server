import { Injectable } from '@nestjs/common';
import { CreateProductDetailDto } from './dto/create-product_detail.dto';
import { UpdateProductDetailDto } from './dto/update-product_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDetail } from './entities/product_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductDetailService {
  constructor(@InjectRepository(ProductDetail) private readonly productDetailRepos: Repository<ProductDetail>) {}

  async create(createProductDetailDto: any) {
    const result = await this.productDetailRepos
      .createQueryBuilder()
      .insert()
      .into(ProductDetail)
      .values({
        product: createProductDetailDto.product_id,
        color_id: createProductDetailDto.color_id,
        image_id: createProductDetailDto.image_id,
        size_id: createProductDetailDto.size_id,
        description: createProductDetailDto.description, 
      })
      .execute();
  }

  async findAll() {
    return await this.productDetailRepos
      .createQueryBuilder('product_detail')
      .leftJoinAndSelect('product_detail.product_id', 'product')
      .leftJoinAndSelect('product_detail.color_id', 'color')
      .leftJoinAndSelect('product_detail.size_id', 'size')
      .leftJoinAndSelect('product_detail.image_id', 'image')
      .getMany();
  }

  async findOne(id: number) {
    return await this.productDetailRepos.findOne({where: {product_detail_id: id}});
  }

  async update(id: number, updateProductDetailDto: any) {
    return await this.productDetailRepos
      .createQueryBuilder()
      .update(ProductDetail)
      .set({
        product: updateProductDetailDto.product_id,
        color_id: updateProductDetailDto.color_id,
        image_id: updateProductDetailDto.image_id,
        size_id: updateProductDetailDto.size_id,
        description: updateProductDetailDto.description,
      })
      .where('product_detail_id = :id', { id })
      .execute();
  }

  remove(id: number) {
    return `This action removes a #${id} productDetail`;
  }
}
