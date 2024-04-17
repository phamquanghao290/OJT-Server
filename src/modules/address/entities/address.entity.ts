import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.address)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({
        nullable: true,
        type: 'text',
    })
    nameAddress: string;

    @Column()
    phone: string;

    @Column()
    fullName: string;
}
