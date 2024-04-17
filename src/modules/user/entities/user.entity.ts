import { Address } from 'src/modules/address/entities/address.entity';
import { Cart } from 'src/modules/cart/entities/cart.entity';
import { FavoriteProduct } from 'src/modules/favorite_product/entities/favorite_product.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

enum Role {
    ADMIN,
    USER = 0
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    // @Column()
    // avatar?: string;

    @Column({
        type: 'int',
        default: Role.USER,
    })
    role: string;

    @Column({
        type: 'tinyint',
        default: 1,
    })
    status: number;

    @OneToMany(() => Address, (address) => address.user)
    address: Address[];

    @OneToMany(() => Order, (order) => order.user)
    order: Order[];

    @OneToMany(() => Cart, (cart) => cart.user)
    cart: Cart;

    @OneToMany(() => FavoriteProduct, (favoriteProduct) => favoriteProduct.user)
    favoriteProduct: FavoriteProduct[];
}
