import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { STATUS_CODES } from 'http';

@Controller('api/product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }
  
  @Post()
  async create(@Body() createProductDto: any) {
    const result = await this.productsService.create(createProductDto);
    const allProducts = await this.productsService.findAll();
    return {
      message: 'Thêm sản phẩm thành công',
      data: allProducts,
      STATUS_CODES: STATUS_CODES.OK
    }
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const result = await this.productsService.update(+id, updateProductDto);
    const allProducts = await this.productsService.findAll();
    return {
      message: 'Cập nhật sản phẩm thành công',
      data: allProducts,
      STATUS_CODES: STATUS_CODES.OK
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.productsService.remove(+id);
    const allProducts = await this.productsService.findAll();
    return {
      message: 'Xoá sản phẩm thành công',
      data: allProducts,
      STATUS_CODES: STATUS_CODES.OK
    }
  }
}
