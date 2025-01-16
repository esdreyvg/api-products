import { Controller, Get } from '@nestjs/common';
import { ProductsService } from 'src/infrastructure/repositories/products/products.service';

@Controller('products')
export class ProductsController {
    constructor (private readonly productService : ProductsService){}

    @Get()
    getAllProducts() : String {
        return this.productService.getAll();
    }
}
