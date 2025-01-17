import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from 'src/controllers/products/products.controller';
import { Products } from 'src/domain/repositories/products/products.interface';
import { ProductsService } from 'src/infrastructure/repositories/products/products.service';

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
