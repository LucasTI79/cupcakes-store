import { getOrderStore } from '@lib/firebase/firestore';
import { queryClient } from '@lib/queryClient';

import { createOrder } from './entity';

import { IOrderService } from '.';

export class OrderFirebaseService implements IOrderService {
  user: User | null;

  constructor(user: User) {
    this.user = user;
  }

  async listBuyerOrders(): Promise<Order[]> {
    const orders = await getOrderStore
      .where('buyerId', '==', this.user?.uid)
      .get();
    return orders.docs.map((order) => order.data() as Order);
  }

  async list(): Promise<Order[]> {
    const orders = await getOrderStore.get();
    return orders.docs.map((order) => order.data() as Order);
  }

  async listSellerOrders(): Promise<Order[]> {
    const orders = await getOrderStore
      .where('sellerId', '==', this.user?.uid)
      .get();
    return orders.docs.map((order) => order.data() as Order);
  }

  async get(orderId: string): Promise<Order | null> {
    const docSnapshot = await getOrderStore.doc(orderId).get();
    if (docSnapshot.exists) {
      const orderData = docSnapshot.data();
      if (!orderData) {
        throw new Error('Pedido não encontrado');
      }
      if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
        throw new Error('Usuário não autorizado');
      }
      return orderData as Order;
    }
    return null;
  }

  async save(order: Order): Promise<void> {
    const orderToSave = createOrder(order);
    await getOrderStore.add(orderToSave);
    await queryClient.invalidateQueries({
      queryKey: ['orders'],
    });
  }

  async update(orderId: string, order: Order): Promise<void> {
    const docSnapshot = await getOrderStore.doc(orderId).get();
    if (!docSnapshot.exists) {
      throw new Error('Order not found');
    }
    const orderData = docSnapshot.data();
    if (!orderData) {
      throw new Error('Pedido não encontrado');
    }

    if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
      throw new Error('Usuário não autorizado');
    }
    const orderToSave = createOrder(order);
    await getOrderStore.doc(orderId).update(orderToSave);
    await queryClient.invalidateQueries({
      queryKey: ['orders'],
    });
  }

  async deleteProduct(orderId: string): Promise<void> {
    const docSnapshot = await getOrderStore.doc(orderId).get();
    if (!docSnapshot.exists) {
      throw new Error('Pedido não encontrado');
    }
    const orderData = docSnapshot.data();
    if (!orderData) {
      throw new Error('Pedido não encontrado');
    }

    if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
      throw new Error('Usuário não autorizado');
    }
    await getOrderStore.doc(orderId).delete();
    await queryClient.invalidateQueries({
      queryKey: ['orders'],
    });
  }
}
