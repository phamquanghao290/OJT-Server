import { Brand } from 'src/modules/brand/entities/brand.entity';
import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Category } from 'src/modules/category/entities/category.entity';
import { Color } from 'src/modules/color/entities/color.entity';
import { FavoriteProduct } from 'src/modules/favorite_product/entities/favorite_product.entity';
import { OrderDetail } from 'src/modules/order-detail/entities/order-detail.entity';
import { ProductDetail } from 'src/modules/product_detail/entities/product_detail.entity';
import { Size } from 'src/modules/size/entities/size.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

enum Rating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameProduct: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number;

  @Column({
    nullable: true,
    type: 'text',
  })
  image: string;

  @Column()
  stock: number;

  @Column({
    nullable: true,
    type: 'enum',
    enum: Rating,
  })
  rate: number;

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn({ name: 'category_id' })
  category: Category[];

  @OneToMany(() => ProductDetail, (productDetail) => productDetail.product)
  productDetail: ProductDetail;

  @ManyToOne(() => Brand, (brand) => brand.product)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
  orderDetail: OrderDetail;

  @OneToMany(
    () => FavoriteProduct,
    (favoriteProduct) => favoriteProduct.product,
  )
  favoriteProduct: FavoriteProduct;

  @OneToMany((type) => Cart, (cart) => cart.product)
  cart: Cart[];
}

// d:/OJT/server/src/modules/products/entities/product.entity.ts
