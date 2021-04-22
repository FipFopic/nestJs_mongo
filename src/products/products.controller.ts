import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductsService } from './products.service'
import { Product } from './schemas/product.schema'

@Controller('/api/products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) { }

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll()
  }

  @Get('/:id')
  getById(@Param('id') id): Promise<Product> {
    return this.productsService.getById(id)
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto)
  }

  @Delete()
  removeById(@Param('id') id: string): Promise<Product> {
    return this.productsService.removeById(id)
  }

  @Put('/:id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    return this.productsService.updateById(id, updateProductDto)
  }

}
