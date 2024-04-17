import { ProductDetail } from "src/modules/product_detail/entities/product_detail.entity";
import { Product } from "src/modules/products/entities/product.entity";
import { User } from "src/modules/user/entities/user.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.cart)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Product, (product) => product.cart, { cascade: true })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  quantity: number;
}
