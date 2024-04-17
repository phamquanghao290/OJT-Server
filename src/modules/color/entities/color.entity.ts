import { ProductDetail } from 'src/modules/product_detail/entities/product_detail.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { SizeColor } from 'src/modules/size_color/entities/size_color.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('colors')
export class Color {
    @PrimaryGeneratedColumn()
    colorId: number;

    @Column()
    nameColor: string;

    @OneToMany(() => ProductDetail, (productDetail) => productDetail.color_id)
    productDetail: ProductDetail[];

    @OneToMany(() => SizeColor, (size_color) => size_color.color)
    sizeColor: SizeColor[];
}
