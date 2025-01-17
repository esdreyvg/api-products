import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './domain/modules/categories/categories.module';
import { ProductsModule } from './domain/modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './domain/repositories/products/products.interface';
import { Categories } from './domain/repositories/categories/categories.interface';
import { ProductsSupplier } from './domain/repositories/products/productsSupplier.interface';

@Module({
  imports: [CategoriesModule, ProductsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'rtProducts',
    password: 'rtProducts',
    database: 'DB-ERP-PRODUCTS',
    entities: [Products, Categories, ProductsSupplier],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
