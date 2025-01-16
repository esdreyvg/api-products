import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './domain/modules/categories/categories.module';
import { ProductsModule } from './domain/modules/products/products.module';

@Module({
  imports: [CategoriesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
