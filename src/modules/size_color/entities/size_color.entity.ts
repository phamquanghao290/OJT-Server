import { Color } from 'src/modules/color/entities/color.entity';
import { Size } from 'src/modules/size/entities/size.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('size_color')
export class SizeColor {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Size, (size) => size.sizeId)
    @JoinColumn({ name: 'size_id' })
    size: Size[];

    @ManyToOne(() => Color, (color) => color.colorId)
    @JoinColumn({ name: 'color_id' })
    color: Color[];
}
