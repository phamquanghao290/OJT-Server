import { Module } from '@nestjs/common';
import { SizeColorService } from './size_color.service';
import { SizeColorController } from './size_color.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeColor } from './entities/size_color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SizeColor])],
  controllers: [SizeColorController],
  providers: [SizeColorService],
})
export class SizeColorModule {}
