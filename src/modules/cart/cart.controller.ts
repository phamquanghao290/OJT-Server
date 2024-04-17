import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('api/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async addToCart(@Body() createCartDto: any) {
    const { product_id, user_id } = createCartDto;
    return await this.cartService.create(user_id, product_id);
  }

  @Get(':id')
  async findAll(@Param('id') id: string) {
    return await this.cartService.findAll(+id);
  }

  @Put('increase')
  async updateIncrease(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return await this.cartService.updateIncreaseStock(updateCartDto);
  }

  @Put('decrease')
  async updateDecrease(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return await this.cartService.updateDecreaseStock(updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
