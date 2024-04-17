import { ProductDetail } from 'src/modules/product_detail/entities/product_detail.entity';
import { OneToMany } from 'typeorm';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SizeColor } from 'src/modules/size_color/entities/size_color.entity';
import { Product } from 'src/modules/products/entities/product.entity';

@Entity('sizes')
export class Size {
    @PrimaryGeneratedColumn()
    sizeId: number;

    @Column()
    nameSize: string;

    @OneToMany(() => ProductDetail, (productDetail) => productDetail.size_id)
    productDetail: ProductDetail[];

    @OneToMany(() => SizeColor, (sizeColor) => sizeColor.size)
    sizeColor: SizeColor[];
}
