export interface IOrderService {
  list(): Promise<Order[]>;
  listBuyerOrders(userId: string): Promise<Order[]>;
  listSellerOrders(userId: string): Promise<Order[]>;
  get(orderId: string): Promise<Order | null>;
  save(order: Order): Promise<void>;
  update(orderId: string, order: Order): Promise<void>;
  deleteProduct(orderId: string): Promise<void>;
}
