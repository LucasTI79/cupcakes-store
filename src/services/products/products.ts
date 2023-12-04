import { currentUser } from '../../lib/firebase/auth';
import { getProductStore } from '../../lib/firebase/firestore';

import { IProductService } from '.';

export class ProductFirebaseService implements IProductService {
  async listMyProducts(userId: string): Promise<Product[]> {
    const querySnapshot = await getProductStore
      .where('userId', '==', userId)
      .get();

    return querySnapshot.docs.map((doc) => {
      const data = doc.data() as Product;
      return {
        id: doc.id,
        name: data.name,
        price: data.price,
        image: data.image,
        weight: data.weight,
        description: data.description,
        userId: data.userId,
      };
    });
  }

  async list(): Promise<Product[]> {
    const querySnapshot = await getProductStore
      .where('active', '==', true)
      .get();

    return querySnapshot.docs.map((doc) => {
      const data = doc.data() as Product;
      return {
        id: doc.id,
        name: data.name,
        price: data.price,
        image: data.image,
        weight: data.weight,
        description: data.description,
        userId: data.userId,
      };
    });
  }

  async get(productId: string): Promise<Product | null> {
    const docSnapshot = await getProductStore.doc(productId).get();
    if (docSnapshot.exists) {
      const data = docSnapshot.data() as Product;
      return {
        ...data,
        id: docSnapshot.id,
      };
    }

    return null;
  }

  async save(product: Product): Promise<void> {
    if (currentUser()?.uid !== product.userId) {
      throw new Error('Usuário não autorizado');
    }
    await getProductStore.add(product);
  }

  async update(productId: string, product: Product): Promise<void> {
    const docSnapshot = await getProductStore.doc(productId).get();
    if (!docSnapshot.exists) {
      throw new Error('Produto não encontrado');
    }
    const productData = docSnapshot.data();
    if (currentUser()?.uid !== productData?.userId) {
      throw new Error('Usuário não autorizado');
    }
    const doc = await getProductStore.doc(productId);
    await doc.update(product);
  }

  async deleteProduct(productId: string): Promise<void> {
    const docSnapshot = await getProductStore.doc(productId).get();
    if (!docSnapshot.exists) {
      throw new Error('Produto não encontrado');
    }
    const productData = docSnapshot.data();
    if (currentUser()?.uid !== productData?.userId) {
      throw new Error('Usuário não autorizado');
    }
    await getProductStore.doc(productId).delete();
  }
}
