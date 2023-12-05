export interface IOrderService {
  list(): Promise<Order[]>;
  listMyOrders(userId: string): Promise<Order[]>;
  get(orderId: string): Promise<Order | null>;
  save(order: Order): Promise<void>;
  update(orderId: string, order: Order): Promise<void>;
  deleteProduct(orderId: string): Promise<void>;
}
