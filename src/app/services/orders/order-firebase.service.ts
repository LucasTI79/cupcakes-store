import { getOrderStore, getUsersStore } from '@lib/firebase/firestore';
import { queryClient } from '@lib/queryClient';
import { ProductFirebaseService } from '@services/products/product-firebase.service';

import { createOrder } from './entity';

import { IOrderService } from '.';

export class OrderFirebaseService implements IOrderService {
  user: User | null;

  constructor(user: User) {
    this.user = user;
  }

  async completeOrder(orderId: string): Promise<void> {
    const docSnapshot = await getOrderStore.doc(orderId).get();
    if (!docSnapshot.exists) {
      throw new Error('Pedido não encontrado');
    }
    const orderData = docSnapshot.data();
    if (orderData) {
      if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
        throw new Error('Usuário não autorizado');
      }
    }
    await docSnapshot.ref.update({
      status: 'completed',
    });
    await queryClient.invalidateQueries({
      queryKey: [`orders${this.user?.uid}`],
    });
  }

  async cancelOrder(orderId: string): Promise<void> {
    const docSnapshot = await getOrderStore.doc(orderId).get();
    if (!docSnapshot.exists) {
      throw new Error('Pedido não encontrado');
    }
    const orderData = docSnapshot.data();
    if (orderData) {
      if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
        throw new Error('Usuário não autorizado');
      }
    }
    await docSnapshot.ref.update({
      status: 'canceled',
    });
    await queryClient.invalidateQueries({
      queryKey: [`orders${this.user?.uid}`],
    });
  }

  async listBuyerOrders(): Promise<OrderResponse[]> {
    const orders = await getOrderStore
      .where('buyerId', '==', this.user?.uid)
      .get();

    const productFirebaseService = new ProductFirebaseService(this.user);

    return Promise.all(
      orders.docs.map(async (order) => {
        const orderData = order.data() as Order;
        if (!orderData) {
          throw new Error('Pedido não encontrado');
        }
        if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
          throw new Error('Usuário não autorizado');
        }
        const seller = await getUsersStore.doc(orderData.sellerId).get();
        if (!seller.exists) throw new Error('Vendedor não encontrado');
        const sellerData = seller.data();

        const buyer = await getUsersStore.doc(orderData.buyerId).get();
        if (!buyer.exists) throw new Error('Comprador não encontrado');
        const buyerData = buyer.data();

        const products = await Promise.all(
          orderData.products.map(async (product) => {
            const productResponse = await productFirebaseService.get(
              product.product.id!,
            );
            if (!productResponse) {
              throw new Error(
                `Produto com o id: ${product.product.id} não encontrado`,
              );
            }
            return {
              product: productResponse,
              quantity: product.quantity,
            };
          }),
        );

        return {
          id: order.id,
          buyerName: buyerData?.fullname,
          sellerName: sellerData?.fullname,
          status: orderData.status,
          buyerId: orderData.buyerId,
          sellerId: orderData.sellerId,
          paymentMethod: orderData.paymentMethod,
          total: orderData.total,
          products,
          createdAt: orderData.createdAt,
          updatedAt: orderData.updatedAt,
        };
      }),
    );
  }

  async list(): Promise<OrderResponse[]> {
    const orders = await getOrderStore.get();

    const productFirebaseService = new ProductFirebaseService(this.user);
    return Promise.all(
      orders.docs.map(async (order) => {
        const orderData = order.data() as Order;
        if (!orderData) {
          throw new Error('Pedido não encontrado');
        }
        if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
          throw new Error('Usuário não autorizado');
        }
        const seller = await getUsersStore.doc(orderData.sellerId).get();
        if (!seller.exists) throw new Error('Vendedor não encontrado');
        const sellerData = seller.data();

        const buyer = await getUsersStore.doc(orderData.buyerId).get();
        if (!buyer.exists) throw new Error('Comprador não encontrado');
        const buyerData = buyer.data();

        const products = await Promise.all(
          orderData.products.map(async (product) => {
            const productResponse = await productFirebaseService.get(
              product.product.id!,
            );
            if (!productResponse) {
              throw new Error(
                `Produto com o id: ${product.product.id} não encontrado`,
              );
            }
            return {
              product: productResponse,
              quantity: product.quantity,
            };
          }),
        );

        return {
          id: order.id,
          buyerName: buyerData?.fullname,
          sellerName: sellerData?.fullname,
          status: orderData.status,
          buyerId: orderData.buyerId,
          sellerId: orderData.sellerId,
          paymentMethod: orderData.paymentMethod,
          total: orderData.total,
          products,
          createdAt: orderData.createdAt,
          updatedAt: orderData.updatedAt,
        };
      }),
    );
  }

  async listSellerOrders(): Promise<OrderResponse[]> {
    const orders = await getOrderStore
      .where('sellerId', '==', this.user?.uid)
      .get();

    const productFirebaseService = new ProductFirebaseService(this.user);
    return Promise.all(
      orders.docs.map(async (order) => {
        const orderData = order.data() as Order;
        if (!orderData) {
          throw new Error('Pedido não encontrado');
        }
        if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
          throw new Error('Usuário não autorizado');
        }
        const seller = await getUsersStore.doc(orderData.sellerId).get();
        if (!seller.exists) throw new Error('Vendedor não encontrado');
        const sellerData = seller.data();

        const buyer = await getUsersStore.doc(orderData.buyerId).get();
        if (!buyer.exists) throw new Error('Comprador não encontrado');
        const buyerData = buyer.data();

        const products = await Promise.all(
          orderData.products.map(async (product) => {
            const productResponse = await productFirebaseService.get(
              product.product.id!,
            );
            if (!productResponse) {
              throw new Error(
                `Produto com o id: ${product.product.id} não encontrado`,
              );
            }
            return {
              product: productResponse,
              quantity: product.quantity,
            };
          }),
        );

        return {
          id: order.id,
          buyerName: buyerData?.fullname,
          sellerName: sellerData?.fullname,
          status: orderData.status,
          buyerId: orderData.buyerId,
          sellerId: orderData.sellerId,
          paymentMethod: orderData.paymentMethod,
          total: orderData.total,
          products,
          createdAt: orderData.createdAt,
          updatedAt: orderData.updatedAt,
        };
      }),
    );
  }

  async get(orderId: string): Promise<OrderResponse | null> {
    const docSnapshot = await getOrderStore.doc(orderId).get();
    if (docSnapshot.exists) {
      const productFirebaseService = new ProductFirebaseService(this.user);
      const orderData = docSnapshot.data() as Order;
      if (!orderData) {
        throw new Error('Pedido não encontrado');
      }
      if (![orderData.sellerId, orderData.buyerId].includes(this.user?.uid)) {
        throw new Error('Usuário não autorizado');
      }
      const seller = await getUsersStore.doc(orderData.sellerId).get();
      if (!seller.exists) throw new Error('Vendedor não encontrado');
      const sellerData = seller.data();

      const buyer = await getUsersStore.doc(orderData.buyerId).get();
      if (!buyer.exists) throw new Error('Comprador não encontrado');
      const buyerData = buyer.data();

      const products = await Promise.all(
        orderData.products.map(async (product) => {
          const productResponse = await productFirebaseService.get(
            product.product.id!,
          );
          if (!productResponse) {
            throw new Error(
              `Produto com o id: ${product.product.id} não encontrado`,
            );
          }
          return {
            product: productResponse,
            quantity: product.quantity,
          };
        }),
      );

      return {
        id: docSnapshot.id,
        buyerName: buyerData?.name,
        sellerName: sellerData?.name,
        status: orderData.status,
        buyerId: orderData.buyerId,
        sellerId: orderData.sellerId,
        paymentMethod: orderData.paymentMethod,
        total: orderData.total,
        products,
        createdAt: orderData.createdAt,
        updatedAt: orderData.updatedAt,
      };
    }
    return null;
  }

  async save(order: OrderRequest): Promise<void> {
    const orderToSave = createOrder(order);
    await getOrderStore.add(orderToSave);
    await queryClient.invalidateQueries({
      queryKey: [`orders${this.user?.uid}`],
    });
  }

  async update(orderId: string, order: OrderRequest): Promise<void> {
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
      queryKey: [`orders${this.user?.uid}`],
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
      queryKey: [`orders${this.user?.uid}`],
    });
  }
}
