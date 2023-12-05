import { IOrderService } from '.';

export class OrderFirebaseService implements IOrderService {
  user: User | null;

  constructor(user: User) {
    this.user = user;
  }

  list(): Promise<Order[]> {
    throw new Error('Method not implemented.');
  }

  listMyOrders(): Promise<Order[]> {
    throw new Error('Method not implemented.');
  }

  get(orderId: string): Promise<Order | null> {
    throw new Error('Method not implemented.');
  }

  save(order: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }

  update(orderId: string, order: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }

  deleteProduct(orderId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
