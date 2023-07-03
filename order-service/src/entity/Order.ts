import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: "table_orders"})
export class Order {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    orderNumber !: string;

    @Column({nullable: false})
    item!: string;

    @Column({nullable: false})
    price!: number;

    @Column({nullable: false})
    quantity!: number

    constructor(orderNumber: string, item: string, price: number, quantity: number) {
        this.orderNumber = orderNumber;
        this.item = item;
        this.price = price;
        this.quantity = quantity;
    }
     


}