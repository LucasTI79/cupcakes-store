type User = FirebaseAuthTypes.User;

interface Product {
  id?: string;
  name: string;
  description: string;
  image?: string | null;
  weight: number;
  userId: string;
  active?: boolean;
}

interface ProductRequest extends Omit<Product, 'id'> {
  price: number;
}

interface ProductResponse extends Product {
  price: number;
  productRecordId: string;
}

type UserCustom = {
  id?: string;
  fullname: string;
  role: string;
  email: string;
  phoneNumber: string | null;
  photoURL: string | null;
};

type ProductRecord = {
  id: string;
  productId: string;
  price: number;
  createdAt: Date;
};

interface ProductRecordRequest extends Omit<ProductRecord, 'id'> {}

type OrderStatus = 'pending' | 'completed' | 'canceled' | 'delivered';
type PaymentMethods = 'credit-card' | 'debit' | 'pix' | 'cash';

type Order = {
  id?: string;
  sellerId: string;
  buyerId: string;
  paymentMethod: PaymentMethods;
  products: {
    product: Pick<
      ProductResponse,
      'id' | 'userId' | 'productRecordId' | 'price'
    >;
    quantity: number;
  }[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
};

type OrderRequest = {
  sellerId: string;
  buyerId: string;
  paymentMethod: PaymentMethods;
  products: {
    product: Pick<
      ProductResponse,
      'id' | 'userId' | 'productRecordId' | 'price'
    >;
    quantity: number;
  }[];
  total: number;
  status: OrderStatus;
};

type OrderResponse = {
  id: string;
  sellerId: string;
  sellerName: string;
  sellerPhone: string;
  buyerId: string;
  buyerName: string;
  buyerPhone: string;
  paymentMethod: PaymentMethods;
  products: {
    product: ProductResponse;
    quantity: number;
  }[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
};
