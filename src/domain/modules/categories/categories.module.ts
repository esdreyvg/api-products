import { Module } from '@nestjs/common';
import { CategoriesController } from 'src/controllers/categories/categories.controller';
import { CategoriesService } from 'src/infrastructure/repositories/categories/categories.service';

@Module({
    imports: [],
    controllers: [CategoriesController],
    providers: [CategoriesService]
})
export class CategoriesModule {}
