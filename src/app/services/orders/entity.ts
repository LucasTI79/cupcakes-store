export function createOrder(order: OrderRequest): Order {
  return {
    buyerId: order.buyerId || '',
    sellerId: order.sellerId || '',
    paymentMethod: order.paymentMethod || 'cash',
    products: order.products ?? [],
    status: order.status ?? 'pending',
    total: order.total ?? 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
