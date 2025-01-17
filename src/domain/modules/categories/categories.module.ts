import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from 'src/controllers/categories/categories.controller';
import { Categories } from 'src/domain/repositories/categories/categories.interface';
import { CategoriesService } from 'src/infrastructure/repositories/categories/categories.service';

@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    controllers: [CategoriesController],
    providers: [CategoriesService]
})
export class CategoriesModule {}
