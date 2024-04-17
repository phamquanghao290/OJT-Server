import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';

@Controller('api/size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Post()
  async create(@Body() createSizeDto: CreateSizeDto) {
    const result = await this.sizeService.create(createSizeDto);
    const allSize = await this.sizeService.findAll();
    return {
      message: 'Thêm thành công',
      data: allSize
    }
  }

  @Get()
  async findAll() {
    return await this.sizeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sizeService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    const result = await this.sizeService.update(+id, updateSizeDto);
    const allSize = await this.sizeService.findAll();
    return {
      message: 'Cập nhật size thành công',
      data: allSize
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.sizeService.remove(+id);
    const allSize = await this.sizeService.findAll();
    return { message: 'Xóa này', data: allSize }
  }
}
