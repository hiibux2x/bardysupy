export interface FoodItem {
  id: string;
  name: string;
  description: string;
  category: 'Food' | 'Drink' | 'Snack';
  price: number; // in Naira (₦)
  emoji: string;
  rating: number;
  prepTime: string;
  badge?: string;
}

export interface CartItem {
  item: FoodItem;
  quantity: number;
  notes?: string;
}

export type OrderStatus = 'Placed' | 'Preparing' | 'Out for Delivery' | 'Delivered';

export interface FoodOrder {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  deliveryAddress: string;
  phoneNumber: string;
  estimatedDelivery: string;
}

export interface DataPlan {
  id: string;
  name: string;
  volume: string;
  validity: string;
  price: number; // in Naira (₦)
}

export type NetworkProvider = 'MTN' | 'Airtel' | 'GLO' | '9mobile';

export interface TopupTransaction {
  id: string;
  date: string;
  type: 'Airtime' | 'Data';
  network: NetworkProvider;
  phoneNumber: string;
  amount: number;
  dataPlan?: DataPlan;
  status: 'Completed' | 'Failed';
  reference: string;
}

export interface UserWallet {
  balance: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}
