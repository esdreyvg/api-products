import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getAll() : string {
        return 'The products is empty. Please created products in the Database.'
    }
}
