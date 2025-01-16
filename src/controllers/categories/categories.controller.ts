import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from 'src/infrastructure/repositories/categories/categories.service';

@Controller('categories')
export class CategoriesController {
    constructor (private readonly categoriesService: CategoriesService) {}

    @Get()
    getAll() : string {
        return this.categoriesService.getCategories();
    }
}
