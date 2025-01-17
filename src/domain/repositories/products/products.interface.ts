import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    category_id: number

    @Column()
    stock: number

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column({ default: '0'})
    status: string

}
