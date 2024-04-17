import { Product } from 'src/modules/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brands')
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
    })
    nameBrand: string;

    @Column()
    image_brand: string;

    @OneToMany(() => Product, (product) => product.brand, { cascade: true })
    product: Product[];
}
