import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'src/domain/repositories/categories/categories.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories) 
        private categoriesRepository: Repository<Categories>
    ){}
    getCategories() : Promise<Categories[]> {
        return this.categoriesRepository.find();
    }
}
