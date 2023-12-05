export function createOrder(order: OrderRequest): Order {
  return {
    buyerId: order.buyerId || '',
    sellerId: order.sellerId || '',
    paymentMethod: order.paymentMethod || 'cash',
    products:
      order.products.map((product) => ({
        product: {
          id: product.product.id,
          productRecordId: product.product.productRecordId,
          userId: product.product.userId,
          price: product.product.price,
        },
        quantity: product.quantity,
      })) ?? [],
    status: order.status ?? 'pending',
    total: order.total ?? 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
