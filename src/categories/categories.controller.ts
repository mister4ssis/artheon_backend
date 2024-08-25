import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '@prisma/client';

@Controller('category')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() category: Category) {
    return this.categoriesService.createCategory(category);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.categoriesService.getAllCategories({ where: query });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.getUniqueCategory({ id: Number(id) });
  }
}
