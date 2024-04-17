import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductDetailService } from './product_detail.service';
import { CreateProductDetailDto } from './dto/create-product_detail.dto';
import { UpdateProductDetailDto } from './dto/update-product_detail.dto';

@Controller('product-detail')
export class ProductDetailController {
  constructor(private readonly productDetailService: ProductDetailService) {}

  @Post()
  create(@Body() createProductDetailDto: CreateProductDetailDto) {
    const result = this.productDetailService.create(createProductDetailDto);
    return {
      message: 'Thêm chi tiết sản phẩm thành công',
      data: result
    } 
  }

  @Get()
  async findAll() {
    console.log('Hello World!');
    return await this.productDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDetailDto: UpdateProductDetailDto) {
    return this.productDetailService.update(+id, updateProductDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDetailService.remove(+id);
  }
}
