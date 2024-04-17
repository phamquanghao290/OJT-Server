import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeColorService } from './size_color.service';
import { CreateSizeColorDto } from './dto/create-size_color.dto';
import { UpdateSizeColorDto } from './dto/update-size_color.dto';

@Controller('size-color')
export class SizeColorController {
  constructor(private readonly sizeColorService: SizeColorService) {}

  @Post()
  create(@Body() createSizeColorDto: CreateSizeColorDto) {
    return this.sizeColorService.create(createSizeColorDto);
  }

  @Get()
  findAll() {
    return this.sizeColorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sizeColorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSizeColorDto: UpdateSizeColorDto) {
    return this.sizeColorService.update(+id, updateSizeColorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sizeColorService.remove(+id);
  }
}
