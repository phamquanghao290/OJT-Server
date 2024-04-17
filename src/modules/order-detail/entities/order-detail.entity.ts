import { Product } from 'src/modules/products/entities/product.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_detail')
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Order, (order) => order.orderDetail)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @ManyToOne(() => Product, (product) => product.orderDetail)
    @JoinColumn({ name: 'productId' })
    product: Product[];

    @Column()
    quantity: number;
}
