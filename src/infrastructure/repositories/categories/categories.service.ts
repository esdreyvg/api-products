import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
    getCategories() : string {
        return 'The categories of products is empty, Please to create a new category.'
    }
}
