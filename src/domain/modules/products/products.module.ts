import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/products/products.controller';
import { ProductsService } from 'src/infrastructure/repositories/products/products.service';

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
