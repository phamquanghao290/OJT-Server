import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Color } from 'src/modules/color/entities/color.entity';
import { Image } from 'src/modules/image/entities/image.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Size } from 'src/modules/size/entities/size.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('product_detail')
export class ProductDetail {
  @PrimaryGeneratedColumn()
  product_detail_id: number;

  @ManyToOne(() => Product, (product) => product.productDetail)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @OneToMany(() => Cart, (cart) => cart.product)
  cart: Cart[];

  @ManyToOne(() => Image, (image) => image.id)
  @JoinColumn({ name: 'image_id' })
  image_id: Image[];

  @ManyToOne(() => Color, (color) => color.colorId)
  @JoinColumn({ name: 'color_id' })
  color_id: Color[];

  @ManyToOne(() => Size, (size) => size.sizeId)
  @JoinColumn({ name: 'size_id' })
  size_id: Size[];
}
