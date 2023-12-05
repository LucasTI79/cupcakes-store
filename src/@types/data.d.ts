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

type Order = {
  id?: string;
  sellerId: string;
  buyerId: string;
  products: { product: ProductRecord; quantity: number }[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
};
