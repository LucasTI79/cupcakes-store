export interface IOrderService {
  list(): Promise<OrderResponse[]>;
  listBuyerOrders(userId: string): Promise<OrderResponse[]>;
  listSellerOrders(userId: string): Promise<OrderResponse[]>;
  get(orderId: string): Promise<OrderResponse | null>;
  save(order: OrderRequest): Promise<void>;
  completeOrder(orderId: string): Promise<void>;
  cancelOrder(orderId: string): Promise<void>;
  update(orderId: string, order: OrderRequest): Promise<void>;
  deleteProduct(orderId: string): Promise<void>;
}
