import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepos: Repository<Cart>,
  ) {}

  async create(user_id: number, product_id: number) {
    const check = await this.getCartByUserId(user_id, product_id);
    if (check.length > 0) {
      const cart = check[0];
      cart.quantity += 1;
      return await this.cartRepos.save(cart);
    } else {
      const newCart = await this.cartRepos
        .createQueryBuilder('cart')
        .insert()
        .into('cart')
        .values({
          user: user_id,
          product: product_id,
          quantity: 1,
        });
      return await newCart.execute();
    }
  }

  async findAll(id: number) {
    return await this.cartRepos
      .createQueryBuilder('cart')
      .select()
      .where('cart.user_id = :id', { id })
      .innerJoinAndSelect('cart.product', 'product')
      .getMany();
  }

  async getCartByUserId(user_id: number, product_id: number) {
    return await this.cartRepos
      .createQueryBuilder('cart')
      .select()
      .where('cart.user_id = :user_id', { user_id })
      .andWhere('cart.product_id = :product_id', { product_id })
      .getMany();
  }

  async updateQuantity(quantity: number, user_id: number, product_id: number) {
    return await this.cartRepos
      .createQueryBuilder('cart')
      .update()
      .set({ quantity: quantity })
      .where('cart.user_id = :user_id', { user_id })
      .andWhere('cart.product_id = :product_id', { product_id })
      .execute();
  }

  async updateDecreaseStock(createCartDto: any) {
    const cart = await this.cartRepos.findOneOrFail({ where: {id: createCartDto.id,}})
    cart.quantity = cart.quantity - 1;
    return await this.cartRepos.save(cart);
  } 

  async updateIncreaseStock(createCartDto: any) {
    const cart = await this.cartRepos.findOneOrFail({ where: {id: createCartDto.id,}})
    cart.quantity = cart.quantity + 1;
    return await this.cartRepos.save(cart);
  }

  async remove(id: number) {
    await this.cartRepos.delete({ id });
    return { message: 'Xoá sản phẩm thành công' };
  }
}
