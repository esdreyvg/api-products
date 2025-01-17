import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/domain/repositories/products/products.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private productsRepository: Repository<Products>
    ){}
    getAll() : Promise<Products[]> {
        return this.productsRepository.find();
    }
}
