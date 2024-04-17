import { ProductDetail } from 'src/modules/product_detail/entities/product_detail.entity';
import { OneToMany } from 'typeorm';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/modules/products/entities/product.entity';
import { Color } from 'src/modules/color/entities/color.entity';

@Entity('sizes')
export class Size {
    @PrimaryGeneratedColumn()
    sizeId: number;

    @Column()
    nameSize: string;

    @OneToMany(() => ProductDetail, (productDetail) => productDetail.size_id)
    productDetail: ProductDetail[];

    @OneToMany(() => Color, (color) => color.size)
    color: Color[];
}
