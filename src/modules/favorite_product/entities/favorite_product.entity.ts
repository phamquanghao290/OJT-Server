import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favorite_product')
export class FavoriteProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.favoriteProduct)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Product, (product) => product.id)
    @JoinColumn({ name: 'product_id' })
    product: Product[];
}
