import { CartLine } from './cart-line.model';

export class Cart {
    lines: Array<CartLine> = new Array<CartLine>();
    itemCount: number = 0;
    totalPrice: number = 0;
}
