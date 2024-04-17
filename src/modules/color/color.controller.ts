import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColorService } from './color.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Controller('api/color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Post()
  async create(@Body() createColorDto: CreateColorDto) {
    const result = await this.colorService.create(createColorDto);
    const allColor = await this.colorService.findAll();
    return {
      message: 'Thêm thành công',
      data: allColor,
    }
  }

  @Get()
  async findAll() {
    return await this.colorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColorDto: UpdateColorDto) {
    const result = this.colorService.update(+id, updateColorDto);
    const allColor = this.colorService.findAll();
    return {
      message: 'Cập nhật color thành công',
      data: allColor
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.colorService.remove(+id);
    const allColor = this.colorService.findAll();
    return { message: 'Xóa thành công', data: allColor }
  }
}
