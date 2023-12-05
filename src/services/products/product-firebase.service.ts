import { queryClient } from '@lib/queryClient';

import {
  getProductRecordStore,
  getProductStore,
} from '../../lib/firebase/firestore';

import { createProduct } from './entity';

import { IProductService } from '.';

export class ProductFirebaseService implements IProductService {
  user: User | null;

  constructor(user: User) {
    this.user = user;
  }

  async listMyProducts(): Promise<ProductResponse[]> {
    const userId = this.user?.uid;
    if (!userId) {
      return [];
    }

    const querySnapshot = await getProductStore
      .where('userId', '==', userId)
      .get();

    return Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const productData = doc.data() as Product;

        const productRecord = await getProductRecordStore
          .where('productId', '==', doc.id)
          .orderBy('createdAt', 'desc')
          .limit(1)
          .get();

        const productRecordData =
          productRecord.docs?.[0]?.data() as ProductRecord;

        return {
          id: doc.id,
          name: productData.name,
          image: productData.image,
          weight: productData.weight,
          description: productData.description,
          userId: productData.userId,
          price: productRecordData?.price || 0,
        } as ProductResponse;
      }),
    );
  }

  async list(): Promise<ProductResponse[]> {
    const querySnapshot = await getProductStore
      .where('active', '==', true)
      .get();

    return Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const productData = doc.data() as Product;

        const productRecord = await getProductRecordStore
          .where('productId', '==', doc.id)
          .orderBy('createdAt', 'desc')
          .limit(1)
          .get();

        const productRecordData =
          productRecord.docs?.[0]?.data() as ProductRecord;

        return {
          id: doc.id,
          name: productData.name,
          image: productData.image,
          weight: productData.weight,
          description: productData.description,
          userId: productData.userId,
          price: productRecordData?.price || 0,
        } as ProductResponse;
      }),
    );
  }

  async get(productId: string): Promise<ProductResponse | null> {
    const docSnapshot = await getProductStore.doc(productId).get();
    if (docSnapshot.exists) {
      const productData = docSnapshot.data() as Product;

      const productRecord = await getProductRecordStore
        .where('productId', '==', productData.id)
        .orderBy('createdAt', 'desc')
        .limit(1)
        .get();

      const productRecordData =
        productRecord.docs?.[0]?.data() as ProductRecord;

      return {
        ...productData,
        price: productRecordData?.price || 0,
        id: docSnapshot.id,
      };
    }

    return null;
  }

  async save(product: ProductRequest): Promise<void> {
    const { price, ...productToSave } = product;
    if (this.user?.uid !== product.userId) {
      throw new Error('Usuário não autorizado');
    }

    const productFormated = createProduct({
      ...productToSave,
      userId: this.user.uid,
    });

    const productSaved = await getProductStore.add(productFormated);
    const productRecordToSave: ProductRecordRequest = {
      price,
      productId: productSaved.id,
      createdAt: new Date(),
    };
    getProductRecordStore.add(productRecordToSave);
    queryClient.invalidateQueries('products');
  }

  async update(productId: string, product: ProductRequest): Promise<void> {
    const { price, ...productToSave } = product;

    const docSnapshot = await getProductStore.doc(productId).get();
    if (!docSnapshot.exists) {
      throw new Error('Produto não encontrado');
    }
    const productData = docSnapshot.data();
    if (!productData) {
      throw new Error('Produto não encontrado');
    }

    if (this.user?.uid !== productData.userId) {
      throw new Error('Usuário não autorizado');
    }
    const productRecord = await getProductRecordStore
      .where('productId', '==', productData.id)
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get();

    const productRecordData = productRecord.docs?.[0]?.data() as ProductRecord;

    if (productRecordData.price !== price) {
      const productRecordToSave: ProductRecordRequest = {
        price,
        productId: productData.id,
        createdAt: new Date(),
      };
      await getProductRecordStore.add(productRecordToSave);
    }

    getProductStore.doc(productId).update(productToSave);
  }

  async deleteProduct(productId: string): Promise<void> {
    const docSnapshot = await getProductStore.doc(productId).get();
    if (!docSnapshot.exists) {
      throw new Error('Produto não encontrado');
    }
    const productData = docSnapshot.data();
    if (!productData) {
      throw new Error('Produto não encontrado');
    }

    if (this.user?.uid !== productData.userId) {
      throw new Error('Usuário não autorizado');
    }
    getProductStore.doc(productId).delete();
  }
}
