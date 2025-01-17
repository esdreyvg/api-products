import { Entity, Column } from "typeorm"

@Entity()
export class ProductsSupplier {
    @Column()
    product_id: number

    @Column()
    supplier_id: number
}