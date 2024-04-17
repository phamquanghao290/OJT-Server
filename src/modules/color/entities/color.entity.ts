import { ProductDetail } from 'src/modules/product_detail/entities/product_detail.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Size } from 'src/modules/size/entities/size.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('colors')
export class Color {
  @PrimaryGeneratedColumn()
  colorId: number;

  @Column()
  nameColor: string;

  @OneToMany(() => ProductDetail, (productDetail) => productDetail.color_id)
  productDetail: ProductDetail[];

  @ManyToOne(() => Size, (size) => size.sizeId)
  @JoinColumn({ name: 'size_id' })
  size: Size[];
}
